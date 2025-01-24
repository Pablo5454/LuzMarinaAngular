import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.initSlider();
  }

  initSlider() {
    const sliderElement = document.querySelector('.slider') as HTMLElement | null;
    
    if (sliderElement) {
      let isTransitioning = false;
      let slideIndex = 0;

      function showSlides() {
        if (isTransitioning) return;
        isTransitioning = true;

        slideIndex = (slideIndex + 1) % 2; // Cambia entre dos sets de tres imágenes
        sliderElement!.style.transform = `translateX(${-slideIndex * 100}%)`;

        setTimeout(() => {
          isTransitioning = false;
        }, 500); // Igual al tiempo de transición en CSS
      }

      setInterval(showSlides, 3000); // Cambia de imágenes cada 3 segundos
    } else {
      console.error('No se encontró el elemento .slider o no es un HTMLElement.');
    }
  }
  selectedProject: string = ''; // Add this line 
  toggleDropdown(event: any) { this.selectedProject = event.target.innerText; }
}
