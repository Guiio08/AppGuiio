import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckProductosComponent } from './check-productos.component';

describe('CheckProductosComponent', () => {
  let component: CheckProductosComponent;
  let fixture: ComponentFixture<CheckProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
