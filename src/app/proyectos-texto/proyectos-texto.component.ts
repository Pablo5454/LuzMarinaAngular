import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos-texto',
  templateUrl: './proyectos-texto.component.html',
  styleUrls: ['./proyectos-texto.component.scss'],
  
})
export class ProyectosTextoComponent {
  selectedProject: string = ''; // Configura la selección inicial en Proyecto 1 
  selectProject(project: string) { this.selectedProject = project; }
}
