import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-donacion',
  templateUrl: './modal-donacion.component.html',
  styleUrls: ['./modal-donacion.component.scss']
})
export class ModalDonacionComponent {
  @Input() nombre: string = '';
  @Input() email: string = '';
  @Input() direccion: string = '';
  @Input() importe: number | null = null;
  @Input() isOpen: boolean = false; // Controla la visibilidad del modal
  @Output() closeModal = new EventEmitter<void>(); // Emite un evento para cerrar el modal

  cerrarModal(): void {
    this.closeModal.emit(); // Cierra el modal
  }
}
