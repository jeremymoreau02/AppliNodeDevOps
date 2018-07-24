import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent implements OnInit, OnDestroy  {

  tasks: any[];
  tasksSubscription: Subscription;

  constructor(private tasksService: TaskService) { }

  ngOnInit() {
    this.tasksService.getTasksFromServer();
    this.tasksSubscription = this.tasksService.tasksSubject.subscribe(
      (tasks: any[]) => {
        this.tasks = tasks;
      }
    );
    this.tasksService.emitTasksSubject();
  }

  ngOnDestroy() {
    this.tasksSubscription.unsubscribe();
  }



}
