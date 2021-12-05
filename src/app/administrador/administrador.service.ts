import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Administrador } from '../Interfaces/administrador.interface';
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  public lista: Administrador[] = [];

  listarAdministrador() {
    this.http.get<Administrador[]>('http://127.0.0.1:8080/api/administradores')
    .subscribe(resp => {
      this.lista = resp
    });
  }
}
