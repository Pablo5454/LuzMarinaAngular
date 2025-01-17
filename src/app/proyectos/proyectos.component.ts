import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements AfterViewInit {

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
