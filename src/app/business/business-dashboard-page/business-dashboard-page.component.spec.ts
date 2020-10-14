import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDashboardPageComponent } from './business-dashboard-page.component';

describe('BusinessDashboardPageComponent', () => {
  let component: BusinessDashboardPageComponent;
  let fixture: ComponentFixture<BusinessDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
