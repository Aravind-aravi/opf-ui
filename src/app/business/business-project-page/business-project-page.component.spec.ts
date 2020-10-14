import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProjectPageComponent } from './business-project-page.component';

describe('BusinessProjectPageComponent', () => {
  let component: BusinessProjectPageComponent;
  let fixture: ComponentFixture<BusinessProjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessProjectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
