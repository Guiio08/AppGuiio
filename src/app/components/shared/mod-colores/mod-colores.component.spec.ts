import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModColoresComponent } from './mod-colores.component';

describe('ModColoresComponent', () => {
  let component: ModColoresComponent;
  let fixture: ComponentFixture<ModColoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModColoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
