import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidebarLeftComponent } from './dashboard/sidebar-left/sidebar-left.component';
import { ContentComponent } from './dashboard/content/content.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { SidebarRightComponent } from './dashboard/sidebar-right/sidebar-right.component';
import { CommunityComponent } from './dashboard/content/community/community.component';
import { UserComponent } from './dashboard/content/user/user.component';
import { Page404Component } from './page404/page404.component';
import { PlanManagementComponent } from './dashboard/content/community/plan-management/plan-management.component';
import { PlanFormComponent } from './dashboard/content/community/plan-form/plan-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanDetailComponent } from './dashboard/content/community/plan-detail/plan-detail.component';

import { PermissionGuard } from './guard/permission.guard';
import { LoginService } from './services/login.service';
import { PlanService } from './services/plan.service';
import { UserService } from './services/user.service';
import { OtherComponent } from './dashboard/content/other/other.component';
import { FeedbackComponent } from './dashboard/content/other/feedback/feedback.component';
import { AboutComponent } from './dashboard/content/other/about/about.component';

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
    {path: 'other', component: OtherComponent, children: [
      {path: 'feedback', component: FeedbackComponent},
      {path: 'about', component: AboutComponent}
    ]},
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
    PlanDetailComponent,
    PlanFormComponent,
    DashboardComponent,
    OtherComponent,
    FeedbackComponent,
    AboutComponent
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
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
