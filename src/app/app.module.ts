import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StrDirectiveComponent } from './str-directive/str-directive.component';
import { AttrDirectiveComponent } from './attr-directive/attr-directive.component'

@NgModule({
  declarations: [
    AppComponent,
    StrDirectiveComponent,
    AttrDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
