import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  planId: number;

  constructor() { }

  ngOnInit() {
    this.planId = -1;
  }

}
