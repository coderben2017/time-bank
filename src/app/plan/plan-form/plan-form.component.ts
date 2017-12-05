import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel(): void {
    this.goBack();
  }

  save(): void {
    alert('保存成功');
    this.goBack();
  }

  goBack(): void {
    this.router.navigateByUrl('/dashboard/community/plans');
  }

}
