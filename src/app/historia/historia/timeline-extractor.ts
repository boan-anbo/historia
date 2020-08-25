import * as uuid from 'uuid';
import {Timeline} from './timeline.entity';

export const Patterns = {
  chineseMatch: /(([1-2]{1}[0-9][0-9][0-9])[年\s][初中末]?)?(([1十]?[0-9一二三四五六七八九十])月[初中末]?)?(([123一二三]?[0-9一二三四五六七八九十])日)?/g
};


export class TimelineExtractor {
  private inputText: string;
  private processedTimelineEvents: TimelineEvent[];

  constructor(inputText: string) {
    this.inputText = inputText;
    this.processedTimelineEvents = this.ExtractTimelineEntries();
  }


  public GetCleanText(input: string): string {
    const cleanText = input.replace(/[\s\n]/g, '');
    return cleanText;

  }


  private ExtractTimelineEntries(): TimelineEvent[] {

    // Get All Entries with Date
    const input = this.GetCleanText(this.inputText);
    const result = [...input.matchAll(Patterns.chineseMatch)];


    const filteredResult = result.filter((matchEntry: RegExpMatchArray) => {
      return (matchEntry[2] || matchEntry [4] || matchEntry[6]);
    });


    // Extract DateTime Entry from the event
    const timelineEvents = [];
    filteredResult.forEach(entry => {
      const timelineEvent = new TimelineEvent();
      timelineEvent.eventTime = this.MatchConvertToDate(entry);
      timelineEvent.event = this.ExtractEvent(entry, input);
      timelineEvents.push(timelineEvent);
    });

    //
    console.log(timelineEvents);
    return timelineEvents;
  }

  private MatchConvertToDate(match: RegExpMatchArray): EventTime {
    console.log(match);
    const eventTime = {} as EventTime;
    const year = match[2] ? parseInt(match[2]) : undefined ;
    const month = match[4] ? parseInt(match[4]) : undefined ;
    const day = match[6] ? parseInt(match[6]) : undefined ;
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

  private ExtractEvent(match: RegExpMatchArray, source: string): Event {
    const startIndex = match.index;
    const eventContentLength = source.indexOf('。', startIndex) - startIndex > 1 ? source.indexOf('。', startIndex) - startIndex + 1 : 120;
    const eventContext = source.substr(startIndex, eventContentLength);
    const subsequentContext = this.GetSubsequentSentences(2, startIndex + eventContext.length, source, '。');
    const previousContext = this.GetPreviousSentences(2, startIndex, source, '。');
    return {
      eventContent: eventContext,
      startIndex,
      length: eventContext.length,
      subsequentContext,
      previousContext
    }
      ;
  }

  // TODO o add source: pages, and titles for each timeline entry.


  private GetSubsequentSentences(numberOfSentences, startIndex: number, source: string, symbol: string): SubsequentContext {
    let currentPointer;
    for (let i = 0; i <= numberOfSentences; i++) {
      if (i === 0) {
        currentPointer = source.indexOf(symbol, startIndex);
        // update the start index only one time, meaning the start of the subsequent context


      } else {
        currentPointer = source.indexOf(symbol, currentPointer);
      }
    }
    const length = currentPointer > 0 ? currentPointer - startIndex + 1 : 120;
    const subsequentContext = source.substr(startIndex, length);
    return  {
      startIndex,
      subsequentContext,
      length
    };
  }

  private GetPreviousSentences(numberOfSentences: number, startOfCurrentSentence: number, source: string, symbol: string): PreviousContext {
    if (numberOfSentences >= 1 && startOfCurrentSentence > 4) {

      let allSentenceContent = '';

      let currentSentence = this.GetPreviousSentence(startOfCurrentSentence, source, symbol);
      allSentenceContent = currentSentence.previousContent + allSentenceContent;
      if (currentSentence.startIndex > 1) {
        for (let i = 0; i <= numberOfSentences; i++) {
          if (currentSentence.startIndex < 0) {
            break;
          }
          currentSentence = this.GetPreviousSentence(currentSentence.startIndex, source, symbol);
          allSentenceContent = currentSentence.previousContent + allSentenceContent;
        }
      }
      return {
        previousContent: allSentenceContent,
        startIndex: currentSentence.startIndex,
        length: allSentenceContent.length
      } as PreviousContext;
    } else {
      return new PreviousContext();
    }

  }

  private GetPreviousSentence(startOfCurrentSentence: number, source: string, symbol: string): PreviousContext {
    if (startOfCurrentSentence < 0) {
      return null;
    } else {
      const excerpt = source.substring(0, startOfCurrentSentence - 1);
      const startOfLastSentence = excerpt.lastIndexOf('。') > 0 ? excerpt.lastIndexOf(symbol) + 1 : excerpt.lastIndexOf('。');
      console.log(startOfLastSentence);
      const lastSentenceLength = startOfLastSentence < startOfCurrentSentence ? startOfCurrentSentence - startOfLastSentence : (startOfLastSentence - 150 >= 0 ? startOfLastSentence - 150 : 0);
      console.log(lastSentenceLength);
      const lastSentence = source.substr(startOfLastSentence, lastSentenceLength);

      return {
        previousContent: lastSentence,
        startIndex: startOfLastSentence,
        length: lastSentenceLength
      };

    }
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
  timeDetailLevel = (): TimeDetailLevel => {
    return this.eventTime.day ? TimeDetailLevel.day : (this.eventTime.month ? TimeDetailLevel.month : TimeDetailLevel.year);
  }
}

export enum TimeDetailLevel {
  year,
  month,
  day
}



export interface Event {
  eventContent: string;
  startIndex: number;
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
  startIndex = 0;
  length = 0;
}

export interface SubsequentContext {
  subsequentContext: string;
  startIndex: number;
  length: number;
}
