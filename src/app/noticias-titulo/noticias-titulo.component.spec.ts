import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasTituloComponent } from './noticias-titulo.component';

describe('NoticiasTituloComponent', () => {
  let component: NoticiasTituloComponent;
  let fixture: ComponentFixture<NoticiasTituloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasTituloComponent]
    });
    fixture = TestBed.createComponent(NoticiasTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
