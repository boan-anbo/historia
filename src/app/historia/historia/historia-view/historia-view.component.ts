import { Component, OnInit } from '@angular/core';
import {TimelineExtractorService} from '../timeline-extractor.service';
import {TimelineService} from '../timeline.service';
import {Chronology, YearEvent} from '../timeline.entity';

@Component({
  selector: 'app-historia-view',
  templateUrl: './historia-view.component.html',
  styleUrls: ['./historia-view.component.css']
})
export class HistoriaViewComponent implements OnInit {


  constructor(
    private extractorService: TimelineExtractorService,
    private timelineService: TimelineService
  ) { }


  ngOnInit(): void {
    console.log(this.GetResult());
  }

  GetResult(): YearEvent[] {
    const result = this.timelineService.GetResult();
    console.log('RESULT', result)
    return result
  }

  GetInputText() {
    return this.extractorService.GetInputText();
  }

}
