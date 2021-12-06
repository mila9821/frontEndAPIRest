import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListatestimonioComponent } from './listatestimonio/listatestimonio.component';
import { NuevotestimonioComponent } from './nuevotestimonio/nuevotestimonio.component';
import { ActualizartestimonioComponent } from './actualizartestimonio/actualizartestimonio.component';



@NgModule({
  declarations: [
    ListatestimonioComponent,
    NuevotestimonioComponent,
    ActualizartestimonioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestimonioModule { }
