import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SingleUserComponent } from './single-user/single-user.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditUserComponentComponent } from './edit-user-component/edit-user-component.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'users/:id', component: SingleUserComponent },
  { path: 'users', component: UsersViewComponent },
  { path: 'editUser', component: EditUserComponentComponent },
  { path: '', component: UsersViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SingleUserComponent,
    UsersViewComponent,
    FourOhFourComponent,
    EditUserComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
