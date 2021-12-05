import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../Interfaces/restaurante.interface';

@Component({
  selector: 'app-nuevorestaurante',
  templateUrl: './nuevorestaurante.component.html',
  styleUrls: ['./nuevorestaurante.component.css']
})
export class NuevorestauranteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public nuevoRestaurante: Restaurante = {
    id:0,
    nomPlato: "",
    precioPlato: 0,
    foto: ""
  } 

}
