import { Component, OnInit } from '@angular/core';
import { Activity, ActivityService } from '../services/activity.service';
import { Task, TaskService } from '../services/task.service';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.css']
})
export class SidebarRightComponent implements OnInit {

  activities: Activity[];
  tasks: Task[];

  constructor(private activityService: ActivityService, private taskService: TaskService) { }

  ngOnInit() {
    this.activities = [];
    this.tasks = [];

    const userId: number = sessionStorage.getItem('usr') === 'admin' ? 1 : 0;

    this.activityService.getActivities().subscribe(res => {
      this.activities = res;
    });

    this.taskService.getTasks(userId).subscribe(res => {
      this.tasks = res;
    });
  }

}
