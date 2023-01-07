import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  @Output() childEvent = new EventEmitter();
  @Input() parentData: any;
  childControl: any;

  sendParent() {
    this.childEvent.emit(this.childControl);
  }
}
