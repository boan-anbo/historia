import { Injectable } from '@angular/core';
import {ContextLength, Language, TimelineEvent, TimelineExtractor, TimelineExtractorOptions} from './timeline-extractor';
import {TimelineService} from './timeline.service';



@Injectable({
  providedIn: 'root'
})
export class TimelineExtractorService {
  inputText: string;


  processedTimeline: TimelineEvent[];
  currentOptions: TimelineExtractorOptions = {
  contextLength: {
    previousContextLength: 6,
    subsequentContextLength: 4
  },
  useNewLineDelimiter: false
  };

  private tokenizedinput: string[];

  constructor(private timelineService: TimelineService) { }

  GetInputText(): string {
    return this.inputText;
  }

  StartProcessing(inputText: string): void {
    const timelineExtract = new TimelineExtractor(inputText, Language.Chinese, this.GetOptions());
    this.processedTimeline = timelineExtract.GetProcesseResult();
    const tokenizedinput = timelineExtract.GetTokenizedSentences();
    this.timelineService.LoadTimelines(this.processedTimeline, tokenizedinput);
  }

  GetProcessedText(): TimelineEvent[] {
    return this.processedTimeline;
  }

  private GetOptions(): TimelineExtractorOptions {
    return this.currentOptions;
  }

}





