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
    path: 'cliente',
    component: ListaclienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'reserva',
    component: ListareservaComponent,
    pathMatch: 'full'
  },
  {
    path: 'habitacion',
    component: ListahabitacionComponent,
    pathMatch: 'full'
  },
  {
    path: 'restaurante',
    component: ListarestauranteComponent,
    pathMatch: 'full'
  },
  {
    path: 'testimonio',
    component: ListatestimonioComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
