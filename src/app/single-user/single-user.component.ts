import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  name: string = 'NOM Prénom';

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    var user = this.userService.getUserById(+id)
    if(typeof user !== "boolean"){
      this.name = user.name;
    }
    
  }

}
