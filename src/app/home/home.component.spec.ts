import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// Defino las variables de las slides, su índice y su intervalo
const slides: NodeListOf<HTMLImageElement> = document.querySelectorAll(".slides img");
let slideIndex: number = 0;
let intervalId: ReturnType<typeof setInterval> | null = null;

// Inicializa los slides y el intervalo
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(): void {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 10000);
  }
}

// Verifica si el índice ha superado el número de slides o si es negativo
function showSlide(index: number): void {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  // Quita la clase a las imágenes para que se oculten y después les vuelve a dar la clase
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });

  slides[slideIndex].classList.add("displaySlide");
}
//Cambios a diapositiva anterior y siguiente
function prevSlide(): void {
  if (intervalId) clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide(): void {
  slideIndex++;
  showSlide(slideIndex);
}
