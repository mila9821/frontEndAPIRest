import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../Interfaces/restaurante.interface';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-nuevorestaurante',
  templateUrl: './nuevorestaurante.component.html',
  styleUrls: ['./nuevorestaurante.component.css']
})
export class NuevorestauranteComponent implements OnInit {

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit(): void {
  }

 

  crearPlato(inputNombre: string, inputPrecio: number, inputFoto: string){
    const nuevoRestaurante: Restaurante = {
      id:0,
      nomPlato: inputNombre,
      precioPlato: inputPrecio,
      foto: inputFoto
    };
    this.restauranteService.agregarRestaurante(nuevoRestaurante);
  }

}
