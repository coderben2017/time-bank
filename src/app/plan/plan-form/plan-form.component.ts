import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent implements OnInit {

  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
