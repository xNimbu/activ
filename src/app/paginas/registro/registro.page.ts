import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registro = {
    nombre: '',
    apellido: '',
    edad: null,
    rut: '',
    contrasena: '',
  };

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    // Validación simple
    if (
      !this.registro.nombre ||
      !this.registro.apellido ||
      !this.registro.edad ||
      !this.registro.rut ||
      !this.registro.contrasena
    ) {
      this.errorMessage = 'Todos los campos son obligatorios';
      this.successMessage = '';
      return;
    }

    // Verificar si la edad es válida
    if (this.registro.edad < 1) {
      this.errorMessage = 'Por favor, ingrese una edad válida';
      this.successMessage = '';
      return;
    }

     // Guardar los datos del usuario en localStorage
     localStorage.setItem(this.registro.rut, JSON.stringify(this.registro));

    // Simular registro exitoso
    this.successMessage = `¡Registro exitoso! Bienvenido, ${this.registro.nombre}.`;
    this.errorMessage = '';

      // Redirigir al login después de registrarse
      this.router.navigate(['/login']);
  }
}
