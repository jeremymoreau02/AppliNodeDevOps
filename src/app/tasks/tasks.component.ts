import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() title: string;
  @Input() completed: boolean;
  @Input() UserId: number;
  @Input() index: number;
  @Input() id: number;  

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  
  onClickModify() {
    console.log(this.id)
    this.taskService.modifyTask(this.id, this.title, this.UserId, this.completed)
  }

  onClickDelete() {
    console.log(this.id)
    this.taskService.deleteTask(this.id)
  }

}