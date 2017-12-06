import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Injectable()
export class PermissionGuard implements CanActivate, CanDeactivate<DashboardComponent> {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (sessionStorage.getItem('usr')) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

  canDeactivate(component: DashboardComponent): boolean {
    return window.confirm('您确定要注销登录吗？');
  }

}
