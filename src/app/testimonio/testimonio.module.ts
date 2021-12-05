import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListatestimonioComponent } from './listatestimonio/listatestimonio.component';
import { NuevotestimonioComponent } from './nuevotestimonio/nuevotestimonio.component';



@NgModule({
  declarations: [
    ListatestimonioComponent,
    NuevotestimonioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestimonioModule { }
