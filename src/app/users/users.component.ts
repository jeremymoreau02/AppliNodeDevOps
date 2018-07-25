import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() userName: string;
  @Input() lastName: string;
  @Input() age: number;
  @Input() index: number;
  @Input() id: number;  

  constructor() { }

  ngOnInit() {
  }

}