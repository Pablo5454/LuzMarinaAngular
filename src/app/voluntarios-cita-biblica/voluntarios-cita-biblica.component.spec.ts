import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariosCitaBiblicaComponent } from './voluntarios-cita-biblica.component';

describe('VoluntariosCitaBiblicaComponent', () => {
  let component: VoluntariosCitaBiblicaComponent;
  let fixture: ComponentFixture<VoluntariosCitaBiblicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoluntariosCitaBiblicaComponent]
    });
    fixture = TestBed.createComponent(VoluntariosCitaBiblicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
