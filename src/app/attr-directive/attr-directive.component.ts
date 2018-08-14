import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-directive',
  templateUrl: './attr-directive.component.html',
  styleUrls: ['./attr-directive.component.css']
})
export class AttrDirectiveComponent {
  color = "red";
  size = 24;
  democlass = {
    color: "green"
  };
  visible = false;
  displayText = "";
  constructor() {

    this.visible = !this.visible;
    this.displayText = this.visible ? 'show-class' : 'hide-class';
  }


}
