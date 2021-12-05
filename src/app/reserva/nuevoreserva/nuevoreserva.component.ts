import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../Interfaces/reserva,interface';

@Component({
  selector: 'app-nuevoreserva',
  templateUrl: './nuevoreserva.component.html',
  styleUrls: ['./nuevoreserva.component.css']
})
export class NuevoreservaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public nuevoReserva: Reserva = {
    id: 0,
    ingreso: new Date(""),
    salida: new Date(""),
    precio: 0,
    adelanto: 0,
    dias: 0,
    restaurantes: [],
    detalleReservas: []
  }

}
