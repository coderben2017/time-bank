import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan, PlanService } from '../../services/plan.service';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.css']
})
export class PlanDetailComponent implements OnInit {

  plan: Plan;
  time: Date;

  constructor(
    private router: Router,
    private planService: PlanService
  ) { }

  ngOnInit() {
    this.plan = new Plan(0, '', 0, '', 0, 0, 0);
    this.time = null;

    const url: string = window.location.href;
    const x: number = url.search('plans');
    const id: number = Number(url.slice(x + 6));
    this.planService.getPlan(id).subscribe(res => {
      this.plan = res;
      this.time = new Date(this.plan.timeStamp);
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/dashboard/community/plans');
  }

  takePlan(): void {
    const person: string = sessionStorage.getItem('usr');
    this.planService.takePlan(this.plan.id, person).subscribe(res => {
      if (res['status']) {
        alert('接受任务成功，完成任务则奖励到账。');
      } else {
        alert('接受任务失败，请重试。');
      }
      this.goBack();
    });
  }
}

