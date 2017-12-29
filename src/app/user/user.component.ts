import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../services/user.service';
import { getUser } from '../mock/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User(0, '', '', 0, '', 0, null);

    // this.userService.getUser(2).subscribe(res => {
    //   this.user = res;
    // });
    this.user = getUser();
  }

}