import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CommunityComponent } from './community/community.component';
import { UserComponent } from './user/user.component';
import { PlanFormComponent } from './plan/plan-form/plan-form.component';
import { PlanManagementComponent } from './plan/plan-management/plan-management.component';
import { PlanDetailComponent } from './plan/plan-detail/plan-detail.component';
import { OtherComponent } from './other/other.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { Page404Component } from './page404/page404.component';

import { PermissionGuard } from './guard/permission.guard';
import { LoginService } from './services/login.service';
import { PlanService } from './services/plan.service';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';
import { TaskService } from './services/task.service';
import { UserInfoService } from './services/user-info.service';
import { ActivityService } from './services/activity.service';


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
      location: '个人信息'
    }},
    {path: 'other', component: OtherComponent, children: [
      {path: 'feedback', component: FeedbackComponent, data: {
        location: '反馈建议'
      }},
      {path: 'about', component: AboutComponent, data: {
        location: '关于我们'
      }}
    ]},
    {path: '**', component: Page404Component}
  ], canActivate: [PermissionGuard], canDeactivate: [PermissionGuard]},
  {path: '**', component: Page404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    CommunityComponent,
    UserComponent,
    PlanManagementComponent,
    PlanDetailComponent,
    PlanFormComponent,
    FeedbackComponent,
    AboutComponent,
    OtherComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PermissionGuard,
    LoginService,
    PlanService,
    UserService,
    MessageService,
    TaskService,
    UserInfoService,
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
