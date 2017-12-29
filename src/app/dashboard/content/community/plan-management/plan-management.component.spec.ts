import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanManagementComponent } from './plan-management.component';

describe('PlanManagementComponent', () => {
  let component: PlanManagementComponent;
  let fixture: ComponentFixture<PlanManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
