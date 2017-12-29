import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan, PlanService } from '../../services/plan.service';
import { getPlan } from '../../mock/plan';

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
    this.plan = new Plan(0, '', 0, '', 0, 0);
    this.time = null;

    const url = window.location.href;
    const x = url.search('plans');
    const id = Number(url.slice(x + 6));
    // this.planService.getPlan(id).subscribe(res => {
    //   this.plan = res;
    //   this.time = new Date(this.plan.timeStamp);
    // });
    this.plan = getPlan(id);
    this.time = new Date(this.plan.timeStamp);
  }

  goBack(): void {
    this.router.navigateByUrl('/dashboard/community/plans');
  }

  takePlan(): void {
    alert(`接受任务成功！完成后将增加${this.plan.salary}个信用分！`);
    this.goBack();
  }

}