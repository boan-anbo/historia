import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HistoriaModule} from './historia/historia.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        HistoriaModule,
      FlexLayoutModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
