import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username: String = '';
  password: String = '';

  onSubmit() {
    console.log(this.username);
    console.log(this.password);
  }
}
