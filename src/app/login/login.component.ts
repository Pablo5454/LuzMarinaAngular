import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuarioInput: string = '';
  passwordInput: string = '';
  usuarios: { nombre_usuario: string, password: string, es_admin: boolean }[] = [];

  constructor(private router: Router) {}

  verificarCredenciales(): void {
    // Verificar si los inputs son "admin"
    if (this.usuarioInput === 'admin' && this.passwordInput === 'admin') {
      alert('Eres admin');
      this.irAadmin();
      this.guardarUsuario(this.usuarioInput, this.passwordInput, true);
    } else if (this.usuarioInput && this.passwordInput) {
      alert('Correcto');
      this.irAindex();
      this.guardarUsuario(this.usuarioInput, this.passwordInput, false);
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
  /* ir al index */
  irAindex(): void {
    this.router.navigate(['/home']);
  }
  /* ir al admin */
  irAadmin(): void {
    this.router.navigate(['/rescatados']);
  }
 /* guardar usuario */
  guardarUsuario(nombre_usuario: string, password: string, es_admin: boolean): void {
    this.usuarios.push({ nombre_usuario, password, es_admin });
    console.log('Usuarios guardados:', this.usuarios);
  }
}
