import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariosNuestraMisionComponent } from './voluntarios-nuestra-mision.component';

describe('VoluntariosNuestraMisionComponent', () => {
  let component: VoluntariosNuestraMisionComponent;
  let fixture: ComponentFixture<VoluntariosNuestraMisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoluntariosNuestraMisionComponent]
    });
    fixture = TestBed.createComponent(VoluntariosNuestraMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
