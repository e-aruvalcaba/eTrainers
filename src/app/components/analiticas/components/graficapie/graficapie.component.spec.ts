import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficapieComponent } from './graficapie.component';

describe('GraficapieComponent', () => {
  let component: GraficapieComponent;
  let fixture: ComponentFixture<GraficapieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficapieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
