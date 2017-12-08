import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { CommunityComponent } from './community/community.component';
import { UserComponent } from './user/user.component';
import { Page404Component } from './page404/page404.component';
import { PlanManagementComponent } from './plan/plan-management/plan-management.component';
import { PlanFormComponent } from './plan/plan-form/plan-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanDetailComponent } from './plan/plan-detail/plan-detail.component';

import { PermissionGuard } from './guard/permission.guard';
import { PlanService } from './services/plan.service';
import { UserService } from './services/user.service';
import {LoginService} from "./services/login.service";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'community', component: CommunityComponent, children: [
      {path: 'plans', component: PlanManagementComponent, data: {
        location: '任务广场'
      }},
      {path: 'plans/new', component: PlanFormComponent},
      {path: 'plans/:id', component: PlanDetailComponent}
    ]},
    {path: 'user', component: UserComponent, data: {
      location: '个人'
    }},
    {path: '**', component: Page404Component}
  ], canActivate: [PermissionGuard], canDeactivate: [PermissionGuard]},
  {path: '**', component: Page404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    CommunityComponent,
    UserComponent,
    Page404Component,
    PlanManagementComponent,
    PlanFormComponent,
    DashboardComponent,
    PlanDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PermissionGuard, LoginService, PlanService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
