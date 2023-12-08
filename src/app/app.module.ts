import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerComponentComponent } from './timer-component/timer-component.component';
import { BComponentComponent } from './bcomponent/bcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponentComponent,
    BComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
