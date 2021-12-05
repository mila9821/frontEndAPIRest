import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  listarAdministrador() {
    this.http.get('http://127.0.0.1:8080/api/administradores')
    .subscribe((resp:any) => {
      console.log(resp);
    }) 
  }
}
