import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1L2Component } from './c1-l2/c1-l2.component';
import { C2L2Component } from './c2-l2/c2-l2.component';
import { C3L2Component } from './c3-l2/c3-l2.component';
import { C1L3Component } from './c1-l3/c1-l3.component';

@NgModule({
  declarations: [
    AppComponent,
    C1L2Component,
    C2L2Component,
    C3L2Component,
    C1L3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
