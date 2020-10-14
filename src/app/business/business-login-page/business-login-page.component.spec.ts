import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLoginPageComponent } from './business-login-page.component';

describe('BusinessLoginPageComponent', () => {
  let component: BusinessLoginPageComponent;
  let fixture: ComponentFixture<BusinessLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
