import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAntifluidoComponent } from './detalle-antifluido.component';

describe('DetalleAntifluidoComponent', () => {
  let component: DetalleAntifluidoComponent;
  let fixture: ComponentFixture<DetalleAntifluidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAntifluidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAntifluidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
