import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCollapsed = true;

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content);
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
