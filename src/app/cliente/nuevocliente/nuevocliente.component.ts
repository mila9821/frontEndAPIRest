import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../Interfaces/cliente.interface';

@Component({
  selector: 'app-nuevocliente',
  templateUrl: './nuevocliente.component.html',
  styleUrls: ['./nuevocliente.component.css']
})
export class NuevoclienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public nuevoCliente: Cliente = {
    id: 0,
    nombre: "",
    modo: "",
    telefono: "",
    email: "",
    pais: "",
    dni: "",
    foto: "",
    testimonios: [],
    detalleReservas: []
  }

}
