import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlankComponent } from './shared/blank/blank.component';
import { ListaadministradorComponent } from './administrador/listaadministrador/listaadministrador.component';
import { ListaclienteComponent } from './cliente/listacliente/listacliente.component';
import { ListareservaComponent } from './reserva/listareserva/listareserva.component';
import { ListahabitacionComponent } from './habitacion/listahabitacion/listahabitacion.component';
import { ListarestauranteComponent } from './restaurante/listarestaurante/listarestaurante.component';
import { ListatestimonioComponent } from './testimonio/listatestimonio/listatestimonio.component';
import { NuevoadministradorComponent } from './administrador/nuevoadministrador/nuevoadministrador.component';
import { NuevoclienteComponent } from './cliente/nuevocliente/nuevocliente.component';
import { NuevoreservaComponent } from './reserva/nuevoreserva/nuevoreserva.component';
import { NuevohabitacionComponent } from './habitacion/nuevohabitacion/nuevohabitacion.component';
import { NuevorestauranteComponent } from './restaurante/nuevorestaurante/nuevorestaurante.component';
import { NuevotestimonioComponent } from './testimonio/nuevotestimonio/nuevotestimonio.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    pathMatch: 'full'
  },
  {
    path: 'administrador',
    component: ListaadministradorComponent,
    pathMatch: 'full'
  },
  {
    path: 'administrador/nuevo',
    component: NuevoadministradorComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    component: ListaclienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/nuevo',
    component: NuevoclienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'reserva',
    component: ListareservaComponent,
    pathMatch: 'full'
  },
  {
    path: 'reserva/nuevo',
    component: NuevoreservaComponent,
    pathMatch: 'full'
  },
  {
    path: 'habitacion',
    component: ListahabitacionComponent,
    pathMatch: 'full'
  },
  {
    path: 'habitacion/nuevo',
    component: NuevohabitacionComponent,
    pathMatch: 'full'
  },
  {
    path: 'restaurante',
    component: ListarestauranteComponent,
    pathMatch: 'full'
  },
  {
    path: 'restaurante/nuevo',
    component: NuevorestauranteComponent,
    pathMatch: 'full'
  },
  {
    path: 'testimonio',
    component: ListatestimonioComponent,
    pathMatch: 'full'
  },
  {
    path: 'testimonio/nuevo',
    component: NuevotestimonioComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
