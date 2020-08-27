import { Injectable } from '@angular/core';

import {Chronology, Timeline, YearEvent} from './timeline.entity';
import {TimelineEvent} from './timeline-extractor';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  timeline: Timeline;


  constructor() { }

  GetResult(): YearEvent[] {
    if (this.timeline) {
    return this.timeline.GetChronology().GetEventsByYear();
    }
  }

  LoadTimelines(timelineEvents: TimelineEvent[], tokenizedInputSentences: string[]): void {
    this.timeline = new Timeline(timelineEvents, tokenizedInputSentences);
  }
}

