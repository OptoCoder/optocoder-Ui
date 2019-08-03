import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptocoderNavbarComponent } from './optocoder-navbar.component';

describe('OptocoderNavbarComponent', () => {
  let component: OptocoderNavbarComponent;
  let fixture: ComponentFixture<OptocoderNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptocoderNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptocoderNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
