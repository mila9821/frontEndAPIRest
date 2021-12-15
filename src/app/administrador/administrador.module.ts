import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaadministradorComponent } from './listaadministrador/listaadministrador.component';
import { NuevoadministradorComponent } from './nuevoadministrador/nuevoadministrador.component';




@NgModule({
  declarations: [
    ListaadministradorComponent,
    NuevoadministradorComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AdministradorModule { }
