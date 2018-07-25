import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnInit, OnDestroy {

  title: string = 'Titre';
  completed: boolean = false;
  userId: number = 0;

  taskSubscription: Subscription;

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getTask(id)
  }
  
  getTask(id: number){
    this.taskService.getTaskById(+id)
    this.taskSubscription = this.taskService.taskSubject.subscribe(
      (task: any[]) => {
        console.log(task)
        this.title = task[4];
        this.completed = task[2];
        this.userId = task[1];
      }
    );
    this.taskService.emitTaskSubject();
  }

  ngOnDestroy() {
    this.taskSubscription.unsubscribe();
  }

}