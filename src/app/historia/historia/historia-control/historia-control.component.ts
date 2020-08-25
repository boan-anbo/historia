import { Component, OnInit } from '@angular/core';
import {TimelineExtractorService} from '../timeline-extractor.service';
import {TimelineService} from '../timeline.service';

@Component({
  selector: 'app-historia-control',
  templateUrl: './historia-control.component.html',
  styleUrls: ['./historia-control.component.css']
})
export class HistoriaControlComponent implements OnInit {
  __inputText = '';

  constructor(
    private timelineExtractorService: TimelineExtractorService,
    private timelineService: TimelineService
  ) { }

  ngOnInit(): void {
    this.StartProcessing()
  }




  ConsoleText() {

  }



  StartProcessing() {
    this.timelineExtractorService.StartProcessing(this.__inputText)
  }
}
