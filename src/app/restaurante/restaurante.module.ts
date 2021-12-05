import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarestauranteComponent } from './listarestaurante/listarestaurante.component';
import { NuevorestauranteComponent } from './nuevorestaurante/nuevorestaurante.component';



@NgModule({
  declarations: [
    ListarestauranteComponent,
    NuevorestauranteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RestauranteModule { }
