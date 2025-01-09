import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoCardFormularioContactoComponent } from './contacto-card-formulario-contacto.component';

describe('ContactoCardFormularioContactoComponent', () => {
  let component: ContactoCardFormularioContactoComponent;
  let fixture: ComponentFixture<ContactoCardFormularioContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoCardFormularioContactoComponent]
    });
    fixture = TestBed.createComponent(ContactoCardFormularioContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
