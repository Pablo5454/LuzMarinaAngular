import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDonacionComponent } from './modal-donacion.component';

describe('ModalDonacionComponent', () => {
  let component: ModalDonacionComponent;
  let fixture: ComponentFixture<ModalDonacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDonacionComponent]
    });
    fixture = TestBed.createComponent(ModalDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
