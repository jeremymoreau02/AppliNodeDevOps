import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements OnInit, OnDestroy  {

  users: any[];
  usersSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersFromServer();
    this.usersSubscription = this.userService.usersSubject.subscribe(
      (users: any[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsersSubject();
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }


}
