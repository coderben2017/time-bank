import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser(1);
  }

}
