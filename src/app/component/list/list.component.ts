import { Component, OnInit } from '@angular/core';
import { TaskService, NewTaskData } from 'src/app/service/task.service';
import { Task } from 'src/app/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // list = [
  //   {
  //     id: '001',
  //     title: 'item 1',
  //     description: 'item 1 description'
  //   },
  //   {
  //     id: '002',
  //     title: 'item 2',
  //     description: 'item 2 description'
  //   },
  //   {
  //     id: '003',
  //     title: 'item 3',
  //     description: 'item 3 description'
  //   }

  // ];
  list: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // this.list = this.taskService.getTasks();
  }

  getTasks(){
    return this.taskService.getTasks();
  }
}
