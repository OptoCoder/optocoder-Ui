import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptocoderRegistrationComponent } from './optocoder-registration.component';

describe('OptocoderRegistrationComponent', () => {
  let component: OptocoderRegistrationComponent;
  let fixture: ComponentFixture<OptocoderRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptocoderRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptocoderRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
