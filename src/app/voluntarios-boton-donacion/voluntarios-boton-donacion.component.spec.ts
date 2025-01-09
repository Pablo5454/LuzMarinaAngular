import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariosBotonDonacionComponent } from './voluntarios-boton-donacion.component';

describe('VoluntariosBotonDonacionComponent', () => {
  let component: VoluntariosBotonDonacionComponent;
  let fixture: ComponentFixture<VoluntariosBotonDonacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoluntariosBotonDonacionComponent]
    });
    fixture = TestBed.createComponent(VoluntariosBotonDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
