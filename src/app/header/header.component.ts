import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from '../services/message.service';
import { Task, TaskService } from '../services/task.service';
import { UserInfo, UserInfoService } from '../services/user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  messages: Message[];

  tasks: Task[];
  notices: Task[];

  userInfo: UserInfo;
  year: number;
  month: number;

  constructor(
    private messageService: MessageService,
    private taskService: TaskService,
    private userInfoService: UserInfoService
  ) { }

  ngOnInit() {
    this.messages = [];
    this.tasks = [];
    this.notices = [];
    this.userInfo = new UserInfo(0, '', '', 0, 0);
    this.year = 2018;
    this.month = 1;

    const userId = sessionStorage.getItem('usr') === 'admin' ? 1 : 0;

    this.messageService.getMessages(userId).subscribe(res => {
      this.messages = res;
      // for (let i = 0; i < this.messages.length; ++i) {
      //   this.messages[i].timeStamp = Math.floor((new Date().getTime() - this.messages[i].timeStamp) / 60000);
      // }
    });

    this.taskService.getTasks(userId).subscribe(res => {
      this.tasks = res;
    });
    this.taskService.getNotices(userId).subscribe(res => {
      this.notices = res;
    });

    this.userInfoService.getUserInfo(userId).subscribe(res => {
      this.userInfo = res;
      this.year = new Date(this.userInfo.timeStamp).getFullYear();
      this.month = new Date(this.userInfo.timeStamp).getMonth() + 1;
    });
  }

}
