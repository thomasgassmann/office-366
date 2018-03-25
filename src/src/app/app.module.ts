import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { EventPageComponent } from './event-page/event-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    EventPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
