import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-donacion-formulario-donacion',
  templateUrl: './donacion-formulario-donacion.component.html',
  styleUrls: ['./donacion-formulario-donacion.component.scss'],
})
export class DonacionFormularioDonacionComponent {
  @Output() onButtonClick = new EventEmitter<void>();

  // Variables para los inputs
  nombre: string = '';
  email: string = '';
  bancaria: string = '';
  importe: number | null = null;

  // Variables para mensajes
  mensajeError: string = '';
  mensajeExito: string = '';

  // Método para validar y enviar el formulario
  emitButtonClick1(): void {
    if (this.validarFormulario()) {
      this.mensajeExito = '¡Gracias por tu donación! Tu ayuda es invaluable.';
      this.mensajeError = '';
      console.log('Datos enviados:', {
        nombre: this.nombre,
        email: this.email,
        bancaria: this.bancaria,
        importe: this.importe,
      });
      this.ocultarMensajes(); 
      this.limpiarFormulario();
    } else {
      this.mensajeExito = ''; 
      this.ocultarMensajes();
    }
  }

  // Método para validar el formulario
  validarFormulario(): boolean {
    if (this.nombre.trim() === '') {
      this.mensajeError = 'Por favor, ingresa tu nombre.';
      return false;
    }

    if (!this.validarEmail(this.email)) {
      this.mensajeError = 'Por favor, ingresa un email válido.';
      return false;
    }

    if (!this.validarCuentaBancaria(this.bancaria)) {
      this.mensajeError = 'Por favor, ingresa un número de cuenta bancaria válido (9 dígitos).';
      return false;
    }

    if (this.importe === null || this.importe < 5) {
      this.mensajeError = 'El importe debe ser igual o mayor a 5.';
      return false;
    }

    return true;
  }

  // Validar email
  validarEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  // Validar número de cuenta bancaria (9 dígitos)
  validarCuentaBancaria(cuenta: string): boolean {
    const cuentaRegex = /^\d{9}$/;
    return cuentaRegex.test(cuenta);
  }

  // Ocultar mensajes después de 3 segundos
  ocultarMensajes(): void {
    setTimeout(() => {
      this.mensajeError = '';
      this.mensajeExito = '';
    }, 3000);
  }

  // Limpiar los campos del formulario
  limpiarFormulario(): void {
    this.nombre = '';
    this.email = '';
    this.bancaria = '';
    this.importe = null;
  }
}
