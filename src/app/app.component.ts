import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  name = "Angular";
  username = "Test";
  mybutton(ss: Event) {
    console.log(ss);

  }

}
