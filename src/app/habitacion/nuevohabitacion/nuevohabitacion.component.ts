import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../Interfaces/habitacion.interface';
import { HabitacionService } from '../habitacion.service';

@Component({
  selector: 'app-nuevohabitacion',
  templateUrl: './nuevohabitacion.component.html',
  styleUrls: ['./nuevohabitacion.component.css']
})
export class NuevohabitacionComponent implements OnInit {

  constructor(private habitacionService: HabitacionService) { }

  ngOnInit(): void {
  }

  

  crearHabitacion(inputNombre: string, inputEstado: string, inputTipo: string, inputPrecio: number, inputDescripcion: string){
    const nuevoHabitacion: Habitacion = {
      id: 0,
      nombre: inputNombre,
      estado: inputEstado,
      tipo: inputTipo,
      precio: inputPrecio,
      descripcion: inputDescripcion,
      detalleReservas: []
    };
    this.habitacionService.agregarHabitacion(nuevoHabitacion);

  }

}
