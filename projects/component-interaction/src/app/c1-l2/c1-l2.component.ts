import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1-l2',
  templateUrl: './c1-l2.component.html',
  styleUrls: ['./c1-l2.component.css']
})
export class C1L2Component implements OnInit {

  currentTime = new Date();

  constructor() { }

  ngOnInit() {
  }
  getDate() {
    return new Date();
  }

}
