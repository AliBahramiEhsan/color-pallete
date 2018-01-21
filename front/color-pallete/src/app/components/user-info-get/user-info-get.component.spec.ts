import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoGetComponent } from './user-info-get.component';

describe('UserInfoGetComponent', () => {
  let component: UserInfoGetComponent;
  let fixture: ComponentFixture<UserInfoGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
