import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import {Task} from 'src/app/task.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input({ required: true }) task!: Task;

  constructor(private taskService: TaskService){
    
  }

  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }
}
