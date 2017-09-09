import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DbModule } from './db';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
