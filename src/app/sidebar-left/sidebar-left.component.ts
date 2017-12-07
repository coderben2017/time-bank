import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {

  activePart: number;

  constructor() { }

  ngOnInit() {
    this.activePart = 1;
  }

  changeActivePart(index: number): void {
    this.activePart = index;
  }

}
