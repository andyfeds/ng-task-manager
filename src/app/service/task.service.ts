import { Injectable } from '@angular/core';

export interface NewTaskData {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks= [
    {
      id: 't1',
      title: 'task item 1',
      description: 'item 1 description'
    },
    {
      id: 't2',
      title: 'Item 2',
      description: 'item 2 description'
    },
    {
      id: 't3',
      title: 'Item 3',
      description: 'item 3 description'
    }
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(JSON.stringify(this.tasks));
    }
  }

  getTasks(){
    return this.tasks;
  }

  addTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      description: taskData.description,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  
  private saveTasks() {
    console.log(this.tasks);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
