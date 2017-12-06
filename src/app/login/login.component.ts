import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup; // 登录信息表单

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      remember: new FormControl(false)
    });
  }

  /**
   * 用户登录
   */
  login(): void {
    if (this.loginFormGroup.value.username === 'admin' && this.loginFormGroup.value.password === 'admin') {
      this.router.navigateByUrl('/dashboard/community/plans');
      window.sessionStorage.setItem('usr', this.loginFormGroup.value.username);
      window.location.reload();
    } else {
      alert('账号或密码错误');
    }
  }

}
