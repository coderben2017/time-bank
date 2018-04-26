import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanService } from '../../services/plan.service';
import { User, UserService } from '../../services/user.service';
import $ from 'jquery';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent implements OnInit {

  planFormGroup: FormGroup;
  planType: string;
  planPlace: string;

  curUser: User;

  constructor(
    private router: Router,
    private planService: PlanService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.planFormGroup = new FormGroup({
      salary: new FormControl(null),
      place: new FormControl(''),
      time: new FormControl(null)
    });
    this.userService.getUser().subscribe(res => {
      this.curUser = res;
    });
  }

  selectType(type: string, no: number): void {
    this.planType = type;
    $(`.block-type:eq(${no})`).css('border', '2px solid #000');
    $(`.block-type:not(:eq(${no}))`).css('border', 'none');
  }

  selectPlace(place: string, no: number): void {
    this.planPlace = place;
    $(`.block-place:eq(${no})`).css('border', '2px solid #000');
    $(`.block-place:not(:eq(${no}))`).css('border', 'none');
  }

  cancel(): void {
    this.goBack();
  }

  save(): void {
    const timeStamp: number = new Date(this.planFormGroup.value.time).getTime();
    const pushPeoson: string = sessionStorage.getItem('usr');
    if (this.checkForm(timeStamp)) {
      this.planService
        .addPlan(this.planType, this.planPlace, this.planFormGroup.value.salary, timeStamp, pushPeoson)
        .subscribe(res => {
          if (res['status']) {
            alert('任务发布成功！');
            this.goBack();
          } else {
            alert('任务发布失败，请重试。');
          }
        });
    }
  }

  checkForm(timeStamp: number): boolean {
    if (!this.planType) {
      alert('请选择任务类型。');
      return false;
    } else if (!this.planPlace) {
      alert('请选择任务地点。');
      return false;
    } else if (this.planFormGroup.value.salary < 1) {
      alert('任务酬劳需大于0。');
      return false;
    } else if (this.planFormGroup.value.salary > this.curUser.creditValue) {
      alert('您的时间币余额不足以支付。');
      return false;
    } else if (!timeStamp) {
      alert('请将时间填写完整。');
      return false;
    } else {
      if (timeStamp < new Date().getTime()) {
        alert('任务时间应该晚于当前时间。');
        return false;
      }
    }
    return true;
  }

  goBack(): void {
    this.router.navigateByUrl('/dashboard/community/plans');
  }
}
