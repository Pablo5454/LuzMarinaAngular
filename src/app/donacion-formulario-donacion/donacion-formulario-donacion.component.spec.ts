import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionFormularioDonacionComponent } from './donacion-formulario-donacion.component';

describe('DonacionFormularioDonacionComponent', () => {
  let component: DonacionFormularioDonacionComponent;
  let fixture: ComponentFixture<DonacionFormularioDonacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonacionFormularioDonacionComponent]
    });
    fixture = TestBed.createComponent(DonacionFormularioDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
