import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptocoderSidebarComponent } from './optocoder-sidebar.component';

describe('OptocoderSidebarComponent', () => {
  let component: OptocoderSidebarComponent;
  let fixture: ComponentFixture<OptocoderSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptocoderSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptocoderSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
