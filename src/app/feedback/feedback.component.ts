import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../services/complaint.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  complaintForm: FormGroup;

  constructor(
    private complaintService: ComplaintService,
    private router: Router
  ) { }

  ngOnInit() {
    this.complaintForm = new FormGroup({
      content: new FormControl(''),
      phoneNumber: new FormControl(null)
    });
  }

  submitComplaint(): void {
    const content: string = this.complaintForm.value.content;
    const phoneNumber: number = this.complaintForm.value.phoneNumber;

    if (!content) {
      alert('请输入投诉内容。');
      return;
    }
    this.complaintService.pushComplaint(content, phoneNumber).subscribe(res => {
      if (res['status']) {
        alert('投诉提交成功，请等待管理员处理！');
        setTimeout(() => {
          this.router.navigateByUrl('/dashboard/community/plans');
        }, 500);
      } else {
        alert('投诉提交失败，请重试。');
      }
    });
  }

}
