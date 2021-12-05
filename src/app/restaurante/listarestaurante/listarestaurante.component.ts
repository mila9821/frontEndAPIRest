import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-listarestaurante',
  templateUrl: './listarestaurante.component.html',
  styleUrls: ['./listarestaurante.component.css']
})
export class ListarestauranteComponent implements OnInit {

  constructor(private restauranteService: RestauranteService) { 
    this.restauranteService.listaRestaurante();
  }

  ngOnInit(): void {
  }

  get lista() {
    return this.restauranteService.lista;
  }

}
