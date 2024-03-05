import { Injectable } from '@angular/core';

import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    {
      id: new Date().toDateString(),
      title: 'Task 1',
      completed: true
    }
  ];

  constructor() { }

  getTasks(): Task[] {
    return [...this.tasks];
  }

  addTask(title:string): void {
    //Creating a new task
    const newTask: Task = {
      id: new Date().toISOString(),
      title, //title: title,
      completed: false
    }

    //Adding to our task list
    this.tasks.push(newTask);
  }

  toggleTaskCompleted(id:string): void {
    //Finding the task's index to toggle the completed state
    const taskIndex = this.tasks.findIndex(task => task.id === id);

    //toggling completed state of the task selected
    if(taskIndex !== -1){
      this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed
    }
  }

  deleteTask(id: string): void{
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
