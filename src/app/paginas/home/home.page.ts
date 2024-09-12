import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string = '';
  cantidadEntradas: number = 1;
  totalPagar: number = 0; 
  compraExitosa: boolean = false;
  mensajeExito: string = '';
  selectedEvento: any;

  eventos = [
    { nombre: 'Concierto Indie', fecha: '20 de Octubre 2024', hora: '8:00 PM', precio: 15000 },
    { nombre: 'Partido de Fútbol', fecha: '15 de Noviembre 2024', hora: '6:00 PM', precio: 10000 },
    { nombre: 'Lollapalooza', fecha: '5 de Diciembre 2024', hora: '12:00 PM', precio: 70000 },
  ];

  constructor() {}

  ngOnInit(){
    this.usuario = localStorage.getItem('usuario') || 'Invitado';
    this.calcularTotal();
  }

  eventoSeleccionado() {
    // Calcular el total a pagar basado en el evento seleccionado y la cantidad de entradas
    if (this.selectedEvento) {
      this.calcularTotal();
    }
  }

  calcularTotal() {
    if (this.selectedEvento) {
      this.totalPagar = this.selectedEvento.precio * this.cantidadEntradas;
    }
  }
  
  comprarEntradas() {
    this.calcularTotal();

    // Mostrar mensaje de éxito
    this.compraExitosa = true;
    this.mensajeExito = `¡Has comprado ${this.cantidadEntradas} entrada(s) para el concierto!`;
  }

}
