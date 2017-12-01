import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { UserComponent } from './user/user.component';
import { Page404Component } from './page404/page404.component';
import { PlanManagementComponent } from './plan/plan-management/plan-management.component';
import { PlanFormComponent } from './plan/plan-form/plan-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/community', pathMatch: 'full'},
  {path: 'community', component: CommunityComponent, children: [
    {path: '', component: PlanManagementComponent, outlet: 'plans'},
    {path: ':id', component: PlanFormComponent, outlet: 'plans'}
  ]},
  {path: 'user', component: UserComponent},
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
    PlanFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
