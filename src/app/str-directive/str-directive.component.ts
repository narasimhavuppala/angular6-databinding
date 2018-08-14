import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-directive',
  templateUrl: './str-directive.component.html',
  styles: []
})
export class StrDirectiveComponent implements OnInit {

  isShow: boolean = true;
  fruits = ['Apple', 'Mangos', 'Orange']
  btnText = "Hide-Me";
  constructor() { }

  ngOnInit() {
  }
  changeDivVisibility() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.btnText = "Hide-Me"
    }
    else {

      this.btnText = "Show-Mde"
    }

  }

}
