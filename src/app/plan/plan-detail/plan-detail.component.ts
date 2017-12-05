import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.css']
})
export class PlanDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(): void {
    this.router.navigateByUrl('/dashboard/community/plans');
  }

  takePlan(): void {
    alert('接受任务成功');
    this.goBack();
  }

}
