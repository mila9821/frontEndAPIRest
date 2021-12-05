import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-listareserva',
  templateUrl: './listareserva.component.html',
  styleUrls: ['./listareserva.component.css']
})
export class ListareservaComponent implements OnInit {

  constructor(private reservaService: ReservaService) {
    this.reservaService.listaReserva();
   }

  ngOnInit(): void {
  }

  get lista() {
    return this.reservaService.lista;
  }

}
