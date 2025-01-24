import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProyectosTextoComponent } from '../proyectos-texto/proyectos-texto.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  isCollapsed = true;
  constructor(private modalService: NgbModal, private proyectosTextoComponent: ProyectosTextoComponent) {}

  open(content: any) {
    this.modalService.open(content);
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMenu() {
    let submenu = document.getElementById("subMenu");
    if (submenu !== null) {
      submenu.classList.toggle("open-menu");
    }
  }

  toggleDropdown(event: any) {
    event.preventDefault();
    let dropdown = event.target.nextElementSibling;
    if (dropdown !== null) {
      dropdown.classList.toggle("open-dropdown");
    }
  }

 
}
