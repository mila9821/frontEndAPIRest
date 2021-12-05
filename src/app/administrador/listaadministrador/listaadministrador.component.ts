import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-listaadministrador',
  templateUrl: './listaadministrador.component.html',
  styleUrls: ['./listaadministrador.component.css']
})
export class ListaadministradorComponent implements OnInit {

  constructor(private administradorService: AdministradorService) {
    this.administradorService.listarAdministrador();
   }

  ngOnInit(): void {
  }

}
