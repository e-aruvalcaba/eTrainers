import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficabarrashComponent } from './graficabarrash.component';

describe('GraficabarrashComponent', () => {
  let component: GraficabarrashComponent;
  let fixture: ComponentFixture<GraficabarrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficabarrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficabarrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
