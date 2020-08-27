import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from './historia.component';
import {FlexModule} from '@angular/flex-layout';

import { HistoriaControlComponent } from './historia-control/historia-control.component';
import {HistoriaViewComponent} from './historia-view/historia-view.component';
import {FormsModule} from '@angular/forms';
import { HighlightDirective } from './directive/highlight.directive';



@NgModule({
  declarations: [HistoriaComponent, HistoriaViewComponent, HistoriaControlComponent, HighlightDirective],
  exports: [
    HistoriaComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    FormsModule
  ]
})
export class HistoriaModule { }
