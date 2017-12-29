import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanService } from '../../../../services/plan.service';
import $ from 'jquery';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent implements OnInit {

  constructor(
    private router: Router,
    private planService: PlanService
  ) { }

  ngOnInit() {
  }

  cancel(): void {
    this.goBack();
  }

  save(): void {
    const text: string = $('#inputContent3').val();
    const timeStr = $('#inputContent4').val();
    const timeStamp: number = new Date(timeStr.substr(0, 10) + ' ' + timeStr.substr(11)).getTime();
    this.planService.addPlan(text, timeStamp).subscribe(res => {
      if (res) {
        alert('发布成功');
        this.goBack();
      } else {
        alert('格式错误，发布失败');
      }
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/dashboard/community/plans');
  }

}
