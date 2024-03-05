import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  public newTaskTittle!: string;
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks(){
    this.tasks = this.taskService.getTasks();
  }

  addTask(){
    console.log('add');
  }

  toggleTaskCompleted(){
    console.log('toggle');
  }

  deleteTask(){
    console.log('delete');
  }

}
