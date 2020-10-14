import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessViewProfilePageComponent } from './business-view-profile-page.component';

describe('BusinessViewProfilePageComponent', () => {
  let component: BusinessViewProfilePageComponent;
  let fixture: ComponentFixture<BusinessViewProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessViewProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessViewProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
