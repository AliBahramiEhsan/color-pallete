import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMainComponent } from './color-main.component';

describe('ColorMainComponent', () => {
  let component: ColorMainComponent;
  let fixture: ComponentFixture<ColorMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
