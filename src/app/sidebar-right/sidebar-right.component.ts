import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan, PlanService } from '../services/plan.service';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.css']
})
export class SidebarRightComponent implements OnInit {

  takenPlans: Plan[];
  pushedPlans: Plan[];
  datesOfTaken: Date[];
  datesOfPushed: Date[];

  constructor(
    private planService: PlanService,
    private router: Router
  ) { }

  ngOnInit() {
    this.datesOfTaken = [];
    this.datesOfPushed = [];

    this.planService.getTakenPlans().subscribe(res => {
      this.takenPlans = res;
      for (let i = 0; i < this.takenPlans.length; ++i) {
        this.datesOfTaken.push(new Date(this.takenPlans[i].timeStamp));
      }
    });

    this.planService.getPushedPlans().subscribe(res => {
      this.pushedPlans = res;
      for (let i = 0; i < this.pushedPlans.length; ++i) {
        this.datesOfPushed.push(new Date(this.pushedPlans[i].timeStamp));
      }
    });
  }

  lookTakenPlan(id: number): void {
    this.router.navigateByUrl(`/dashboard/community/plans/${id}`);
  }

  finishPushedPlan(id: number): void {
    if (confirm(`该任务确定签收此任务吗？`)) {
      this.planService.finishPlan(id).subscribe(res => {
        if (res['status']) {
          alert('任务签收成功！任务酬劳已到达对方账户。');
        } else {
          alert('任务签收失败，请重试。');
        }
      });
    }
  }

}
