import { Component, EventEmitter, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-donacion-formulario-donacion',
  templateUrl: './donacion-formulario-donacion.component.html',
  styleUrls: ['./donacion-formulario-donacion.component.scss'],
  animations: [
    
  ]
})
export class DonacionFormularioDonacionComponent {
  @Output() onButtonClick = new EventEmitter<void>();

  nombre: string = '';
  email: string = '';
  direccion: string = '';
  importe: number | null = null;

  mostrarModal: boolean = false;
  modalNombre: string = '';
  modalEmail: string = '';
  modalDireccion: string = '';
  modalImporte: number | null = null;
  mensajeError: string = ''; // Mensaje de error

  emitButtonClick(): void {
    this.onButtonClick.emit();
  }

  emitButtonClick1(): void {
    if (this.validarFormulario()) {
      this.modalNombre = this.nombre;
      this.modalEmail = this.email;
      this.modalDireccion = this.direccion;
      this.modalImporte = this.importe;

      // Mostrar el modal con los datos de la donación
      this.mensajeError = ''; // Limpiar cualquier mensaje de error
      this.mostrarModal = true;
      this.limpiarFormulario();
    } else {
      this.mensajeError = 'Por favor, completa todos los campos correctamente.';
      this.mostrarModal = true; // Mostrar el modal con el mensaje de error
    }
  }

  validarFormulario(): boolean {
    return (
      this.nombre.trim() !== '' &&
      this.email.trim() !== '' &&
      this.direccion.trim() !== '' &&
      this.importe !== null &&
      this.importe > 0
    );
  }

  limpiarFormulario(): void {
    this.nombre = '';
    this.email = '';
    this.direccion = '';
    this.importe = null;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }
}
