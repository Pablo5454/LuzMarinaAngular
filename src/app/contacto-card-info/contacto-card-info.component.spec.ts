import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoCardInfoComponent } from './contacto-card-info.component';

describe('ContactoCardInfoComponent', () => {
  let component: ContactoCardInfoComponent;
  let fixture: ComponentFixture<ContactoCardInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoCardInfoComponent]
    });
    fixture = TestBed.createComponent(ContactoCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
