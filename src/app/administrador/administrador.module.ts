import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaadministradorComponent } from './listaadministrador/listaadministrador.component';
import { NuevoadministradorComponent } from './nuevoadministrador/nuevoadministrador.component';
import { ActualizaradministradorComponent } from './actualizaradministrador/actualizaradministrador.component';



@NgModule({
  declarations: [
    ListaadministradorComponent,
    NuevoadministradorComponent,
    ActualizaradministradorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdministradorModule { }
