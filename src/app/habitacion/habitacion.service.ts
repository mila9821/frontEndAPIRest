import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habitacion } from '../Interfaces/habitacion.interface';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private http: HttpClient) { }

  public lista: Habitacion[] = []

  listarHabitacion() {
    this.http.get<Habitacion[]>('http://127.0.0.1:8080/api/habitacion')
    .subscribe(resp => {
      this.lista = resp
    });
  }

  agregarHabitacion(habitacion:Habitacion) {
    this.http.post<any>('http://127.0.0.1:8080/api/habitacion', habitacion).subscribe();
  }
}
