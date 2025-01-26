import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto-card-formulario-contacto',
  templateUrl: './contacto-card-formulario-contacto.component.html',
  styleUrls: ['./contacto-card-formulario-contacto.component.scss']
})
export class ContactoCardFormularioContactoComponent {

  mensajeError: string = '';
  mensajeExito: string = '';


  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  // Método del  formulario
  enviarFormulario(): void {
    // Validar los campos del formulario
    if (this.nombre && this.email && this.mensaje) {
      if (!this.validarEmail(this.email)) {
        this.mensajeError = 'Por favor, ingresa un email válido.';
        this.mensajeExito = ''; 
        this.ocultarMensajes();
        return; 
      }

      this.mensajeError = '';  
      this.mensajeExito = 'Formulario enviado correctamente. ¡Gracias por tu colaboración!';
      
      // Aquí podrías enviar los datos del formulario a un servidor.
      console.log('Formulario enviado:', { nombre: this.nombre, email: this.email, mensaje: this.mensaje });
      this.ocultarMensajes(); 
    } else {
      this.mensajeExito = '';  
      this.mensajeError = 'Por favor, completa todos los campos correctamente.';
      this.ocultarMensajes();
    }
  }

  // Método para ocultar mensajes 
  ocultarMensajes(): void {
    setTimeout(() => {
      this.mensajeError = '';
      this.mensajeExito = '';
    }, 3000);
  }

  // Función para validar el email
  validarEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
