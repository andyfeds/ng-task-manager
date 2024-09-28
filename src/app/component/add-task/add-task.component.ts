import { Component, Output, Input, EventEmitter } from '@angular/core';
import {
  TaskService,
  NewTaskData
} from 'src/app/service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  // @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredDescription = '';
  enteredDate = '';

  constructor(private taskService: TaskService) {}

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      description: this.enteredDescription
    });
    this.close.emit();
  }
}
