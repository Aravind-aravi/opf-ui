import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewProfilePageComponent } from './user-view-profile-page.component';

describe('UserViewProfilePageComponent', () => {
  let component: UserViewProfilePageComponent;
  let fixture: ComponentFixture<UserViewProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
