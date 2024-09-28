import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  // selector:'[app-test]',
  // selector:'.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  name: string = 'John';
  age: number = 20;

  isDisabled: boolean = true;

  count = 0;

  onClickToggle() {
    this.isDisabled = !this.isDisabled;
  }
}
