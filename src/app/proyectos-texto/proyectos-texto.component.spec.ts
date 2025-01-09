import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosTextoComponent } from './proyectos-texto.component';

describe('ProyectosTextoComponent', () => {
  let component: ProyectosTextoComponent;
  let fixture: ComponentFixture<ProyectosTextoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosTextoComponent]
    });
    fixture = TestBed.createComponent(ProyectosTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
