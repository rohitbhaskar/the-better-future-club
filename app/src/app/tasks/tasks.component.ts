import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

import { Task } from '../interfaces/task';

@Component({
    selector: 'my-tasks',
    styleUrls: ['./tasks.component.css'],
    templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TasksService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks);
  }
}
