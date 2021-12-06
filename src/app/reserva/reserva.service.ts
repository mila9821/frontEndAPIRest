import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../Interfaces/reserva,interface';


@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  public lista: Reserva[] = []

  listaReserva() {
    this.http.get<Reserva[]>('http://127.0.0.1:8080/api/detalle')
    .subscribe(resp => {
      this.lista = resp
    });
  }

  agregarReserva(reserva: Reserva){
    this.http.post<any>('http://127.0.0.1:8080/api/detalle', reserva).subscribe();
  }
}
