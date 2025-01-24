import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescatadosModificarComponent } from './rescatados-modificar.component';

describe('RescatadosModificarComponent', () => {
  let component: RescatadosModificarComponent;
  let fixture: ComponentFixture<RescatadosModificarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RescatadosModificarComponent]
    });
    fixture = TestBed.createComponent(RescatadosModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
