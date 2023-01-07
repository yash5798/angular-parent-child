import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  parentControl: any;
  childData: any;
  dataToSend: any;

  sendChild() {
    this.dataToSend = this.parentControl;
  }
}
