import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup; // 登录信息表单

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

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
    // this.loginService.login(this.loginFormGroup.value.username, this.loginFormGroup.value.password).subscribe(res => {
    //   if (res) {
        // this.router.navigateByUrl('/dashboard/community/plans');
        // window.sessionStorage.setItem('usr', this.loginFormGroup.value.username);
        // window.location.reload();
    //   } else {
    //     alert('账号或密码错误');
    //   }
    // });
    if (this.loginFormGroup.value.username === 'admin' && this.loginFormGroup.value.password === 'admin') {
      this.router.navigateByUrl('/dashboard/community/plans');
      window.sessionStorage.setItem('usr', this.loginFormGroup.value.username);
      window.location.reload();
    } else {
      alert('账号或密码错误，请重新输入');
    }
  }

}
