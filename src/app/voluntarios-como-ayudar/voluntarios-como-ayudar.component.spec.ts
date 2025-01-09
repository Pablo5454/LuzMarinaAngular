import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariosComoAyudarComponent } from './voluntarios-como-ayudar.component';

describe('VoluntariosComoAyudarComponent', () => {
  let component: VoluntariosComoAyudarComponent;
  let fixture: ComponentFixture<VoluntariosComoAyudarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoluntariosComoAyudarComponent]
    });
    fixture = TestBed.createComponent(VoluntariosComoAyudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
