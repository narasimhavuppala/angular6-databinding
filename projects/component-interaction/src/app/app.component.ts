import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { C2L2Component } from './c2-l2/c2-l2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.c2l2date = this.localc2l2.currentDate;
  }
  @ViewChild(C2L2Component)
  private localc2l2: C2L2Component;

  c2l2date: any;

  title = 'Componet Interaction';
  getC2L2Date() {

    return this.localc2l2.getDate();
  }


}
