import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from './historia/historia.component';
import {FlexModule} from '@angular/flex-layout';

import { HistoriaControlComponent } from './historia/historia-control/historia-control.component';
import {HistoriaViewComponent} from './historia/historia-view/historia-view.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [HistoriaComponent, HistoriaViewComponent, HistoriaControlComponent],
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
