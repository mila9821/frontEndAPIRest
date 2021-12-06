import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurante } from '../Interfaces/restaurante.interface';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient) { }

  public lista: Restaurante[] = []

  listaRestaurante() {
    this.http.get<Restaurante[]>('http://127.0.0.1:8080/api/restaurante')
    .subscribe(resp => {
      this.lista = resp
    })
  }

  agregarRestaurante(restaurante: Restaurante){
    this.http.post<any>('http://127.0.0.1:8080/api/restaurante', restaurante).subscribe();
  }
}
