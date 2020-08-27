import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaControlComponent } from './historia-control.component';

describe('HistoriaControlComponent', () => {
  let component: HistoriaControlComponent;
  let fixture: ComponentFixture<HistoriaControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
