import * as uuid from 'uuid';
import {Timeline} from './timeline.entity';

export const Patterns = {
  chineseMatch: /(([1-2一二１２]{1}[0-9一二三四五六七八九零０１２３４５６７８９][0-9一二三四五六七八九零０１２３４５６７８９][0-9一二三四五六七八九零０１２３４５６７８９])[年\s][初中末]?)?(([1十]?[0-9一二三四五六七八九十０１２３４５６７８９])月[初中末]?)?(([123一二三０１２３]?[0-9一二三四五六七八九十０１２３４５６７８９])日)?/g
};

export interface TimelineExtractorOptions {
  contextLength: ContextLength;
  useNewLineDelimiter: boolean;
}

export class TimelineExtractor {


  constructor(inputText: string, language: Language, options: TimelineExtractorOptions) {
    this.inputText = inputText;
    this.language = language;
    this.options = options;
    this.processedTimelineEvents = this.ExtractTimelineEntries();


  }
  private inputText: string;
  private tokenizedSentences: string[];
  private processedTimelineEvents: TimelineEvent[];
  private language: Language;
  private options: TimelineExtractorOptions;

  static CnDateNumberToArabic(chineseNumber: string): string {
    const chineseArray: string[] = chineseNumber.split('');
    const resultArray: number[] = [];
    const length = chineseArray.length;
    for (let i = 0; i < length; i++) {
      const character = chineseArray[i];
      const number = parseInt(character);
      if (!isNaN(number)) {
        resultArray.push(number);
        continue;
      }
      if (i === 0 && character === '十') {
        resultArray.push(ChineseToArabicException[character + 'begin']);
      }
      if (i === length - 1) {
        resultArray.push(ChineseToArabicException[character + 'end']);
      }

      resultArray.push(ChineseToArabic[character]);
    }
    return resultArray.join('');
  }

  private static ParseNum(input: string ): number {
    const inputArray = input.split('');
    const found = inputArray.some(inputElement => ChineseNumericWords.includes(inputElement));
    // found means the string contains a chinese numeral word
    if (found) {
      return parseInt(TimelineExtractor.CnDateNumberToArabic(input));
    }
    else {
      return parseInt(input);

    }  }

  private GetContextLength(): ContextLength {
    return this.options.contextLength;
  }
  private GetLanguage(): Language {
    return this.language;
  }

  private GetPeriod(): string {
    console.log(this.GetLanguage());
    const selectedLanguage = LANGUAGE_SYMBOLS.find((item) => item.language === this.GetLanguage());
    if (selectedLanguage) {
      return selectedLanguage.symbol.period;
    } else {
      throw Error(`CANNOT FIND PERIOD SYMBOL FOR ${this.GetLanguage()}`);
    }
  }

  private GetSemicolon(): string {
    const selectedLanguage = LANGUAGE_SYMBOLS.find((item) => item.language === this.GetLanguage());
    if (selectedLanguage) {
      return selectedLanguage.symbol.semicolon;
    } else {
      throw Error(`CANNOT FIND SEMICOLON SYMBOL FOR ${this.GetLanguage()}`);
    }
  }


  public GetCleanText(input: string): string {
    const placeHolder = '{{S}}';
    // preserve space among latin letters.
    let cleanText = input.replace(/([a-zA-Z])(\s)([a-zA-Z])/g, `$1${placeHolder}$3`);

    // if the language is Chinese, repalce Chinese semicolon with Chinese period, so that connected sentences are break down into independent sentences. Otherwise, the parse sentences will usually be too long.
    if (this.GetLanguage() === 'Chinese') {
      const semicolon = new RegExp(this.GetSemicolon(), 'g');
      cleanText = cleanText.replace(semicolon, this.GetPeriod());

    }

    const delimiter = new RegExp(this.IfUseNewLineDelimiter() ? `[\s]` : `[\s\n]`, 'g');
    cleanText = cleanText.replace(delimiter, '');
    cleanText = cleanText.replace(placeHolder, ' ');
    return cleanText;
  }


  private IfUseNewLineDelimiter(): boolean {
    return this.options.useNewLineDelimiter;
  }
  private TokenizeSentences(input: string): string[] {
    const period = '\\' + this.GetPeriod();
    const newline = this.IfUseNewLineDelimiter() ? '\\n' : '';
    const delimiterRegex = new RegExp(`(?<=\\r?[${period}${newline}])`, 'g');
    let tokenizedSentences = input.split(delimiterRegex);


    // if /n is NOT counted towards a sentence delimiter, there is a chance large chunks of texts, e.g. TOC content, will be grouped into one sentence. Below filter out these with an arbitrarily large number;
    if (this.IfUseNewLineDelimiter() === false) {
    tokenizedSentences = tokenizedSentences.filter(sentence => sentence.length < 300);
    }

    return tokenizedSentences;
  }

  public GetTokenizedSentences(): string[] {
    return this.tokenizedSentences;
  }

  private SearchForMatches(inputArray: string[]): TimelineEntryMatch[] {
    const allResults: TimelineEntryMatch[] = [];

    inputArray.forEach((sentence, sentenceIndex) => {
      const sentenceResults = [...sentence.matchAll(Patterns.chineseMatch)];
      sentenceResults.forEach(sentenceResult => {
        allResults.push({
          sentenceIndex,
          regexMatch: sentenceResult,
          sentence,
        });
      });
    });

    return allResults;
  }

  private ExtractTimelineEntries(): TimelineEvent[] {

    // Get All Entries with Date
    // clean up input data
    const input = this.GetCleanText(this.inputText);

    // tokenize input

    const tokenizedSentences = this.TokenizeSentences(input);

    // save tokenized sentences for later references.
    this.tokenizedSentences = tokenizedSentences;


    // extract pattern matches
    const result = this.SearchForMatches(tokenizedSentences);

    // filtering out invalid pattern matches
    const filteredResult = result.filter((matchEntry) => {
      return (matchEntry.regexMatch[2] || matchEntry.regexMatch [4] || matchEntry.regexMatch[6]);
    });


    // fill in dangled month, day events, i.e. those only has day or month but not year marks will be matched to the closest year event before it.
    const fullfillResults = this.FillDangledMonthDayEvents(filteredResult);


    // Extract DateTime Entry from the event
    const timelineEvents = [];

    fullfillResults.forEach(entry => {
      const timelineEvent = new TimelineEvent();
      timelineEvent.eventTime = this.MatchConvertToDate(entry.regexMatch);
      timelineEvent.event = this.ExtractEvent(entry, input);
      timelineEvent.sentenceIndex = entry.sentenceIndex;
      timelineEvent.sentence = entry.sentence;
      // the temporal string literal matched
      timelineEvent.matchedTimeMark = entry.regexMatch[0];
      timelineEvents.push(timelineEvent);
    });

    //
    console.log(timelineEvents);
    return timelineEvents;
  }

  private MatchPreviousYearMonth(match: RegExpMatchArray, matchIndex: number, array: TimelineEntryMatch[]) {
    let counter: number = matchIndex;
    let previousYear: string = match[2];
    let previousMonth: string = match[4];
    let currentEntry: RegExpMatchArray;
    do {
      counter--;
      currentEntry = array[counter]?.regexMatch;
      console.log('Looking at', currentEntry);
      console.log('For Entgry', match);
      console.log('Entry month', previousMonth);
      console.log('Entry year', previousYear);
      if (currentEntry) {

        const year = currentEntry[2];
        const month = currentEntry[4];
        console.log('Entry to full fill', previousMonth, previousYear);
        console.log('CONSIDERING', year, month);
        if (month && previousMonth === undefined) {
          previousMonth = month;
        }
        if (year && previousYear === undefined) {
          previousYear = year;
        }
      }
      if (previousMonth !== undefined && previousYear !== undefined) {
        match[2] = previousYear;
        match[4] = previousMonth;
        console.log('preparing to return', match);
        return match;
      }
    }
    while (counter > 0 && matchIndex - counter < 20);
  }


  private FillDangledMonthDayEvents(inputArray: TimelineEntryMatch[]): TimelineEntryMatch[] {
    return inputArray.map((timelineEntryMatch, timelineEntryMatchIndex, timelineEntryMatches) => {
      let match = timelineEntryMatch.regexMatch;
      // two conditions when you need to match dates: when you have day but not month, or when you have month but not year. But when you only have year, but no month, there is no need to match. Or it will result in giving irrevent months to year
      if (match[2] === undefined || (match[4] === undefined && match[2] === undefined )) {

          console.error(match)

        const filledMatch = this.MatchPreviousYearMonth(match, timelineEntryMatchIndex, timelineEntryMatches);
        if (filledMatch) {
          match = filledMatch;
        }
      }
      timelineEntryMatch.regexMatch = match;
      return timelineEntryMatch;
    });
  }


  private MatchConvertToDate(match: RegExpMatchArray): EventTime {
    console.log(match);
    const eventTime = {} as EventTime;
    const year = match[2] ? TimelineExtractor.ParseNum(match[2]) : undefined;
    const month = match[4] ? TimelineExtractor.ParseNum(match[4]) : undefined;
    const day = match[6] ? TimelineExtractor.ParseNum(match[6]) : undefined;
    if (year) {
      eventTime.year = year;
    }
    if (month) {
      eventTime.month = month;
    }
    if (day) {
      eventTime.day = day;
    }

    return eventTime;
  }

  private GetSubsequentContextLength(): number {
    return this.GetContextLength().subsequentContextLength;
  }

  private GetPreviousContextLength(): number {
    return this.GetContextLength().previousContextLength;
  }

  private ExtractEvent(match: TimelineEntryMatch, source: string): Event {
    const eventSentenceIndex = match.sentenceIndex;
    const eventContext = this.GetSentenceByIndex(eventSentenceIndex);
    const eventContentLength = eventContext.length;
    const subsequentContext = this.GetSubsequentSentences(eventSentenceIndex, this.GetPreviousContextLength());
    // const
    const previousContext = this.GetPreviousSentences(eventSentenceIndex, this.GetSubsequentContextLength());
    const result: Event = {
      eventContext,
      eventSentenceIndex,
      length: eventContext.length,
      subsequentContext,
      previousContext
    };
    return result  ;
  }

  // TODO o add source: pages, and titles for each timeline entry.



  private GetSentenceByIndex(sentenceIndex: number): string {
    return this.tokenizedSentences[sentenceIndex];
  }

  private GetPreviousSentences(eventSentenceIndex: number, sentenceAmount: number): PreviousContext {
    const allSentenceContent = [];
    let currentSentence = '';
    let currentSentenceIndex = 0;
    let lastSentenceIndex;
    for (let i = 1; i <= sentenceAmount && (eventSentenceIndex - i) >= 0; i++) {
      if (i === 1) {
        lastSentenceIndex = eventSentenceIndex - i;
      }
      currentSentenceIndex = eventSentenceIndex - i;
      currentSentence = this.GetSentenceByIndex(currentSentenceIndex);
      allSentenceContent.unshift(currentSentence);

    }

    const result: PreviousContext = {
      previousContent: allSentenceContent.join('') ,
      firstSentenceIndex: currentSentenceIndex,
      lastSentenceIndex,
      length: allSentenceContent.length
    };
    return result ? result : new PreviousContext();
  }

  private GetSubsequentSentences(eventSentenceIndex: number, sentenceAmount: number): SubsequentContext {
    const allSentenceContent = [];
    const inputLength = this.GetTokenizedSentences().length;
    let currentSentence = '';
    let currentSentenceIndex;
    let firstSentenceIndex;
    for (let i = 1; i <= sentenceAmount && (eventSentenceIndex + i) <= inputLength; i++) {
      if (i === 1) {
        firstSentenceIndex = eventSentenceIndex + i;
      }
      currentSentenceIndex = eventSentenceIndex + i;
      currentSentence = this.GetSentenceByIndex(currentSentenceIndex);
      allSentenceContent.push(currentSentence);

    }

    const result: SubsequentContext = {
      subsequentContext: allSentenceContent.join('') ,
      firstSentenceIndex,
      lastSentenceIndex: currentSentenceIndex,
      length: allSentenceContent.length
    };
    return result ? result : new SubsequentContext();
  }



  public GetProcesseResult(): TimelineEvent[] {
    return this.processedTimelineEvents;
  }


}


export interface EventTime {
  year: number;
  month: number;
  day: number;
}

export class TimelineEvent {
  id = uuid.v4();
  eventTime: EventTime;
  event: Event;
  eventPreviousContext: PreviousContext;
  eventSubsequentContext: SubsequentContext;
  match: MatchIndex;
  matchedTimeMark: string;
  showFullContext = false;
  sentenceIndex: number;
  sentence: string;


  timeDetailLevel = (): TimeDetailLevel => {
    return this.eventTime.day ? TimeDetailLevel.day : (this.eventTime.month ? TimeDetailLevel.month : TimeDetailLevel.year);
  }


  GetEvent(): string {
    return this.event.eventContext;
  }

  GetTimeMarkString() {
    return this.matchedTimeMark;
  }
  GetPreviousContext() {
    return this.event.previousContext.previousContent;
  }

  GetPreviousContextOnToggle(): string {
    return this.showFullContext ? this.GetPreviousContext() : '';
  }


  GetSubsequentContext(): string {
    return this.event.subsequentContext.subsequentContext;
  }

  GetSubsequentContextOnToggle(): string {
    return this.showFullContext ? this.GetSubsequentContext() : '';
  }

  GetEventWithinContext() {
    return this.GetPreviousContext() + this.GetEvent() + this.GetSubsequentContext();

  }

  GetEventContentOnToggle() {
    return this.showFullContext ? this.GetEventWithinContext() : this.GetEvent();
  }

  ToggleFullContext() {
    this.showFullContext = !this.showFullContext;
  }
}

export enum TimeDetailLevel {
  year,
  month,
  day
}



export interface Event {
  eventContext: string;
  eventSentenceIndex: number;
  length: number;
  previousContext: PreviousContext;
  subsequentContext: SubsequentContext;

}

export interface MatchIndex {
  start: number;
  end: number;
}


export class PreviousContext {
  previousContent = '';
  firstSentenceIndex = 0;
  lastSentenceIndex = 0;
  length = 0;
}

export class SubsequentContext {
  subsequentContext: string;
  lastSentenceIndex: number;
  firstSentenceIndex: number;
  length: number;
}

export class TimelineEntryMatch  {
  regexMatch: RegExpMatchArray;
  sentenceIndex: number;
  sentence: string;
}

export enum Language {
  Chinese = 'Chinese',
  English = 'English'
}

export const LANGUAGE_SYMBOLS: LanguageSymbol[] = [
  {
    language: Language.Chinese,
    symbol: {
      period: '。',
      semicolon: '；'
    }
  },
  {
    language: Language.English,
    symbol: {
      period: '.'
    }
  }

];

export interface Symbols {
  period: string;
  semicolon?: string;
}

export interface LanguageSymbol {
  language: string;
  symbol: Symbols;
}

export interface ContextLength {
  previousContextLength: number;
  subsequentContextLength: number;
}

enum ChineseToArabic {
  零 = 0,
  一 = 1,
  二 = 2,
  三 = 3,
  四 = 4,
  五 = 5,
  六 = 6,
  七 = 7,
  八 = 8,
  九 = 9,
  '０'= 0,
  '１'= 1,
  '２'= 2,
  '３'= 3,
  '４'= 4,
  '５'= 5,
  '６'= 6,
  '７'= 7,
  '８' = 8,
  '９' = 9
}
enum ChineseToArabicException {
  十end = 0,
  十begin = 1
}

export const ChineseNumericWords = [
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
  '七',
  '八',
  '九',
  '十',
  '０',
  '１',
  '２',
  '３',
  '４',
  '５',
  '６',
  '７',
  '８',
  '９'
];

