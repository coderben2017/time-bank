import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

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
      .filter(event => event instanceof NavigationEnd) // 过滤路由导航结束事件
      .map(() => this.activatedRoute)                  // 转换为activatedRoute对象（router状态树的根节点）继续在stream中执行
      .map(route => {
        while (route.firstChild) {                     // 深度遍历第一个子路由，替换当前路由
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')     // 过滤经过primary出口（默认的<router-outlet></router-outlet>）的路由
      .mergeMap(route => route.data)                   // 将路由中的data对象并入stream（主干流）
      .subscribe((data) => {
        this.curLocation = data['location'];
      });
  }

}
