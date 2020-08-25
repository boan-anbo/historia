import { Component, OnInit } from '@angular/core';
import {TimelineExtractorService} from './timeline-extractor.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  constructor(private historiaService: TimelineExtractorService) { }

  ngOnInit(): void {
  }

}
