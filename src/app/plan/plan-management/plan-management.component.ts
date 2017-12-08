import { Component, OnInit } from '@angular/core';
import { Plan, PlanService } from '../../services/plan.service';

@Component({
  selector: 'app-plan-management',
  templateUrl: './plan-management.component.html',
  styleUrls: ['./plan-management.component.css']
})
export class PlanManagementComponent implements OnInit {

  plans: Plan[]; // 广场上的任务

  constructor(
    private planService: PlanService
  ) { }

  ngOnInit() {
    this.planService.getAllPlans().subscribe(res => {
      this.plans = res;
    });
  }

}
