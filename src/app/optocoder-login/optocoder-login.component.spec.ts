import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptocoderLoginComponent } from './optocoder-login.component';

describe('OptocoderLoginComponent', () => {
  let component: OptocoderLoginComponent;
  let fixture: ComponentFixture<OptocoderLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptocoderLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptocoderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
