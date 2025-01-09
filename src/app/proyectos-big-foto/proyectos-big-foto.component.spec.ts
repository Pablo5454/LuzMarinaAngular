import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosBigFotoComponent } from './proyectos-big-foto.component';

describe('ProyectosBigFotoComponent', () => {
  let component: ProyectosBigFotoComponent;
  let fixture: ComponentFixture<ProyectosBigFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosBigFotoComponent]
    });
    fixture = TestBed.createComponent(ProyectosBigFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
