import { Component, OnInit } from '@angular/core';
import { Plan, PlanService } from '../../services/plan.service';

@Component({
  selector: 'app-plan-management',
  templateUrl: './plan-management.component.html',
  styleUrls: ['./plan-management.component.css']
})
export class PlanManagementComponent implements OnInit {

  plans: Plan[]; // 广场上的任务
  pageSize = 6;
  pages: number[];
  pageNo: number;
  curPlans: Plan[];

  constructor(
    private planService: PlanService
  ) { }

  ngOnInit() {
    this.planService.getAllPlans().subscribe(res => {
      this.plans = res;
      this.pages = [];
      this.pageNo = 1;
      const pageCounts = Math.ceil(this.plans.length / this.pageSize);
      for (let i = 0; i < pageCounts; ++i) {
        this.pages.push(i + 1);
      }
      this.goToPage(this.pageNo);
    });
  }

  lastPage(): void {
    if (this.pageNo > 1) {
      --this.pageNo;
      this.goToPage(this.pageNo);
    }
  }

  nextPage(): void {
    if (this.pageNo < this.pages.length) {
      ++this.pageNo;
      this.goToPage(this.pageNo);
    }
  }

  goToPage(pageNo: number): void {
    this.pageNo = pageNo;
    this.curPlans = [];
    for (let i = (pageNo - 1) * this.pageSize; i < pageNo * this.pageSize; ++i) {
      this.curPlans.push(this.plans[i]);
    }
  }
}
