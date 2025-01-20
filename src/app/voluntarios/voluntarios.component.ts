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
}
