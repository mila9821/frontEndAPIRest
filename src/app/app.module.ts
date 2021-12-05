import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AdministradorModule } from './administrador/administrador.module';
import { ClienteModule } from './cliente/cliente.module';
import { HabitacionModule } from './habitacion/habitacion.module';
import { ReservaModule } from './reserva/reserva.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { TestimonioModule } from './testimonio/testimonio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdministradorModule,
    ClienteModule,
    HabitacionModule,
    ReservaModule,
    RestauranteModule,
    TestimonioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
