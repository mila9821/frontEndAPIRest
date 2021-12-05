import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListareservaComponent } from './listareserva/listareserva.component';
import { NuevoreservaComponent } from './nuevoreserva/nuevoreserva.component';



@NgModule({
  declarations: [
    ListareservaComponent,
    NuevoreservaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReservaModule { }
