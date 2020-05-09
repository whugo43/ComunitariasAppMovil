import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro-acopio',
  templateUrl: './centro-acopio.page.html',
  styleUrls: ['./centro-acopio.page.scss'],
})
export class CentroAcopioPage implements OnInit {
  indice:number=0;
  lista:any[]=[];

  constructor() {
  }

  llenarlista(nombre:any,direccion:any,ubicacion:any) {

    const listp={
      'id':this.indice,
      'nombre':nombre,
      'direccion':direccion,
      'ubicacion':ubicacion
    }
    this.indice=this.indice+1;
    this.lista.push(listp);
  }
  ngOnInit() {
  }

}
