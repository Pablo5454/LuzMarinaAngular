import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.scss']
})
export class VoluntariosComponent implements
  AfterViewInit {
// Código de la animación de codepen
    ngAfterViewInit() {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.add('hidden');
          }
        });
      });

      const hiddenElements = document.querySelectorAll('.animatable');
      hiddenElements.forEach(el => observer.observe(el));
    }
    
      isModalOpen: boolean = false; // Controla si el modal está abierto
      modalImageUrl: string = ''; // URL de la imagen en el modal
      modalText: string = ''; // Texto del modal
    
      showModal(event: Event): void {
        const target = event.target as HTMLImageElement;
        this.modalImageUrl = target.src; // Establece la URL de la imagen
        this.modalText = target.alt.replace(/\n/g, '<br>'); // Establece el texto del alt
        this.isModalOpen = true; // Abre el modal
      }
    
      closeModal(): void {
        this.isModalOpen = false; // Cierra el modal
      }
}




