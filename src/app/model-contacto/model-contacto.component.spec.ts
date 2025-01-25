import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelContactoComponent } from './model-contacto.component';

describe('ModelContactoComponent', () => {
  let component: ModelContactoComponent;
  let fixture: ComponentFixture<ModelContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelContactoComponent]
    });
    fixture = TestBed.createComponent(ModelContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
