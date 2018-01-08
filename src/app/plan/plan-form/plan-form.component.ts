import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanService } from '../../services/plan.service';
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
    if (!text) {
      alert('请填写任务内容。');
      return;
    } else if (!timeStamp) {
      alert('请将任务时间填写完整。');
      $('#inputContent4').focus();
      return;
    } else if (timeStamp < new Date().getTime()) {
      alert('任务时间应当晚于当前时间。');
      $('#inputContent4').focus();
      return;
    }
    this.planService.addPlan(text, timeStamp).subscribe(res => {
      if (res.status) {
        alert('发布成功');
        this.goBack();
      } else {
        switch (res.message) {
          case 1: alert('酬劳非法，请检查是否非数字或者在前面多加了空格'); break;
          case 2: alert('手机号非法，请检查手机号'); break;
          case 3: alert('解析失败，请检查文本格式'); break;
        }
      }
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/dashboard/community/plans');
  }

}
