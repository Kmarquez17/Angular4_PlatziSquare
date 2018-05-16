import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' 

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhgEOw1YxT_l5pgehEE8Q_sfI324exO8k'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
