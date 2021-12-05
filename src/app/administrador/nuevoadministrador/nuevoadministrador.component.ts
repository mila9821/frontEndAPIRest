import { Component, OnInit } from '@angular/core';
import { Administrador } from '../../Interfaces/administrador.interface';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-nuevoadministrador',
  templateUrl: './nuevoadministrador.component.html',
  styleUrls: ['./nuevoadministrador.component.css']
})
export class NuevoadministradorComponent implements OnInit {

  constructor(private administradorService: AdministradorService) { }

  ngOnInit(): void {
  }


  crearAdmi(inputNombre: string, inputUsuario: string, inputContrasena: string, inputTarea: string, inputEstado: number){
    const nuevoAdministrador: Administrador = {
      id: 0,
      nombre: inputNombre,
      usuario: inputUsuario,
      contrasena: inputContrasena,
      tarea: inputTarea,
      estado: inputEstado
    };
    this.administradorService.agregarAdministrador(nuevoAdministrador);
  }

}
