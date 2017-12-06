import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {DashboardComponent} from "../dashboard/dashboard.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  curLocation: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // 组件加载时无路由变化，故需手动初始化curLocation值
    switch (this.activatedRoute.firstChild.snapshot.component['name']) {
      case 'CommunityComponent': this.curLocation = '任务广场'; break;
      case 'UserComponent': this.curLocation = '个人'; break;
    }

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((data) => {
        this.curLocation = data['location'];
      });
  }

}
