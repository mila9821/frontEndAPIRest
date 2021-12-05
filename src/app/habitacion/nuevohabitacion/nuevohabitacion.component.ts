import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../Interfaces/habitacion.interface';

@Component({
  selector: 'app-nuevohabitacion',
  templateUrl: './nuevohabitacion.component.html',
  styleUrls: ['./nuevohabitacion.component.css']
})
export class NuevohabitacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public nuevoHabitacion: Habitacion = {
    id: 0,
    nombre: "",
    estado: "",
    tipo: "",
    precio: 0,
    descripcion: "",
    detalleReservas: []
  }

}
