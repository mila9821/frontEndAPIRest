import { Component, OnInit } from '@angular/core';
import { TestimonioService } from '../testimonio.service';

@Component({
  selector: 'app-listatestimonio',
  templateUrl: './listatestimonio.component.html',
  styleUrls: ['./listatestimonio.component.css']
})
export class ListatestimonioComponent implements OnInit {

  constructor(private testimonioService: TestimonioService) { 
    this.testimonioService.listaTestimonio();
  }

  ngOnInit(): void {
  }

  get lista() {
    return this.testimonioService.lista;
  }

}
