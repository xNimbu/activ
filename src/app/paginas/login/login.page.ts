import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = { user: '', password: '' };
  errorMessage: string = '';
  Message: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log((this.Message = 'Bienvenido a la pagina de login'));
  }

  onSubmit(): boolean {
    const usuario = localStorage.getItem(this.login.user);

    if (!usuario) {
      this.errorMessage = 'RUT no encontrado';
      return false;
    }

    const usuarioData = JSON.parse(usuario);

    // Verifica los valores en la consola
    console.log('Usuario ingresado: ', this.login.user);
    console.log('Contraseña ingresada: ', this.login.password);

    // Verificar si los campos están vacíos
    if (!this.login.user || !this.login.password) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return false;
    }
    // Validar la contraseña
    if (usuarioData.contrasena === this.login.password) {
      // Almacenar el nombre de usuario y redirigir al home
      localStorage.setItem('usuario', usuarioData.nombre);
      localStorage.setItem('rut', usuarioData.rut);
      this.router.navigate(['/home']);
      return true;
    } else {
      this.errorMessage = 'Contraseña incorrecta';
      return false;
    }
  }

  irARegistro() {
    // Navegar a la página de registro
    this.router.navigate(['/registro']);
  }
}
