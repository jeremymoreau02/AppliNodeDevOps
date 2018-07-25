import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SingleUserComponent } from './single-user/single-user.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { TasksViewComponent } from './tasks-view/tasks-view.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditTaskComponentComponent } from './edit-task-component/edit-task-component.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/task.service';

const appRoutes: Routes = [
  { path: 'users/:id', component: SingleUserComponent },
  { path: 'tasks/:id', component: SingleTaskComponent },
  { path: 'users', component: UsersViewComponent },
  { path: 'tasks', component: TasksViewComponent },
  { path: 'editTask', component: EditTaskComponentComponent },
  { path: '', component: UsersViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TasksComponent,
    SingleUserComponent,
    SingleTaskComponent,
    UsersViewComponent,
    TasksViewComponent,
    FourOhFourComponent,
    EditTaskComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    UserService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }