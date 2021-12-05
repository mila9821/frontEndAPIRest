import { Component, OnInit } from '@angular/core';
import { Testimonio } from '../../Interfaces/testimonio.interface';

@Component({
  selector: 'app-nuevotestimonio',
  templateUrl: './nuevotestimonio.component.html',
  styleUrls: ['./nuevotestimonio.component.css']
})
export class NuevotestimonioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public nuevoTestimonio: Testimonio = {
    id: 0,
    contenido: "",
    estado: 0

  }

}
