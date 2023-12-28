import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public title = 'counter-component';
  public counter: number = 10;

  constructor() {

  }


  increaseBy(value: number) {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10
  }
}
