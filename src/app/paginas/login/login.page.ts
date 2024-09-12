import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  cliente = { user: '', password: '' };
  errorMessage: string = '';
  Message: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log((this.Message = 'Bienvenido a la pagina de login'));
  }

  onSubmit(): boolean {
    // Verifica los valores en la consola
    console.log('Usuario ingresado: ', this.cliente.user);
    console.log('Contraseña ingresada: ', this.cliente.password);
    
    // Verificar si los campos están vacíos
    if (!this.cliente.user || !this.cliente.password) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return false;
    }
    // Validación de usuario y contraseña
    if (this.cliente.user === 'admin' && this.cliente.password === 'admin') {
      // Almacenar el usuario en el localStorage
      localStorage.setItem('usuario', this.cliente.user);
      // Almacenar un token en el localStorage
      localStorage.setItem('token', 'some-auth-token');
      
      this.router.navigate(['/home']);
      return true;
    } else {
      this.errorMessage = 'Usuario o contraseña incorrecta';
      return false;
    }
  }
}
