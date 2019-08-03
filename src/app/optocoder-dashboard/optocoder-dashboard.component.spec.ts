import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptocoderDashboardComponent } from './optocoder-dashboard.component';

describe('OptocoderDashboardComponent', () => {
  let component: OptocoderDashboardComponent;
  let fixture: ComponentFixture<OptocoderDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptocoderDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptocoderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
