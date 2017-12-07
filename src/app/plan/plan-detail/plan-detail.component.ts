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
    const url = window.location.href;
    const x = url.search('plans');
    const id = Number(url.slice(x + 6));
    this.plan = this.planService.getPlan(id);
    this.time = new Date(this.plan.timeStamp);
  }

  goBack(): void {
    this.router.navigateByUrl('/dashboard/community/plans');
  }

  takePlan(): void {
    alert('接受任务成功');
    this.goBack();
  }

}
