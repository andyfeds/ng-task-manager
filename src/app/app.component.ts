import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';
  showAddTask = false;

  onAddTask() {
    this.showAddTask = true;
  }

  cancelAddTask() {
    this.showAddTask = false;
  }
}
