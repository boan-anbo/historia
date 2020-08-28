import { Component, OnInit } from '@angular/core';
import {TimelineExtractorService} from '../timeline-extractor.service';
import {TimelineService} from '../timeline.service';

@Component({
  selector: 'app-historia-control',
  templateUrl: './historia-control.component.html',
  styleUrls: ['./historia-control.component.css']
})
export class HistoriaControlComponent implements OnInit {
  __inputText = sample;

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


const sample = `1980年5月16日，中共中央和国务院批准《广东、福建两省会议纪要》，将此前的“出口特区”正式改名为“经济特区”。同年８月，五届全国人大常委会第十五次会议审议批准在深圳、珠海、汕头、厦门设置经济特区，并通过了《广东省经济特区条例》。这标志着中国的经济特区正式诞生。`
