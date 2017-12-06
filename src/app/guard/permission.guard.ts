import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Injectable()
export class PermissionGuard implements CanActivate, CanDeactivate<DashboardComponent> {

  constructor(private router: Router) {}

  /**
   * 路由激活守卫
   * @returns {boolean}
   */
  canActivate(): boolean {
    if (sessionStorage.getItem('usr')) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

  /**
   * 路由失活守卫
   * @param {DashboardComponent} component
   * @returns {boolean}
   */
  canDeactivate(component: DashboardComponent): boolean {
    return window.confirm('您确定要注销登录吗？');
  }

}
