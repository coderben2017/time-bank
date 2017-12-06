import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.css']
})
export class SidebarRightComponent implements OnInit {

  activityDate: Date; // 活动时间

  constructor() { }

  ngOnInit() {
    this.activityDate = new Date('2017-12-24 11:30');
  }

}
