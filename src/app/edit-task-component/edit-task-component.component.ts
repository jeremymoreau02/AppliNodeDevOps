import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task-component',
  templateUrl: './edit-task-component.component.html',
  styleUrls: ['./edit-task-component.component.scss']
})
export class EditTaskComponentComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value['title'];
    const userId = form.value['userId'];
    this.taskService.addTask(title, userId);
    this.router.navigate(['/tasks']);
  }
}