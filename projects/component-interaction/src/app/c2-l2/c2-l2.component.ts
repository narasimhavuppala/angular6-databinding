import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2-l2',
  templateUrl: './c2-l2.component.html',
  styleUrls: ['./c2-l2.component.css']
})
export class C2L2Component implements OnInit {

  constructor() { }

  currentDate = new Date();

  ngOnInit() {
  }

  getDate() {

    return new Date();
  }

}
