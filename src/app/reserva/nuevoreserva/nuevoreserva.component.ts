import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../Interfaces/reserva,interface';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-nuevoreserva',
  templateUrl: './nuevoreserva.component.html',
  styleUrls: ['./nuevoreserva.component.css']
})
export class NuevoreservaComponent implements OnInit {

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
  }

  

  crearReserva(inputIngreso: Date, inputSalida: Date, inputPrecio: number, inputAdelanto: number, inputDias: number){
    const nuevoReserva: Reserva = {
      id: 0,
      ingreso: inputIngreso,
      salida: new Date(inputSalida),
      precio: inputPrecio,
      adelanto: inputAdelanto,
      dias: inputDias,
      restaurantes: [],
      detalleReservas: []
    };
    this.reservaService.agregarReserva(nuevoReserva);
  }

}
