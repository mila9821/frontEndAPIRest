import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public lista: Cliente[] = [];

  listarCliente() {
    this.http.get<Cliente[]>('http://127.0.0.1:8080/api/clientes')
    .subscribe(resp => {
      this.lista = resp
    });
  }

  agregarCliente(cliente:Cliente) {
    this.http.post<any>('http://127.0.0.1:8080/api/clientes', cliente).subscribe();
  }
}
