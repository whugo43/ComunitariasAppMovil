import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { isNull } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-centro-acopio',
  templateUrl: './centro-acopio.page.html',
  styleUrls: ['./centro-acopio.page.scss'],
})
export class CentroAcopioPage implements OnInit {
  public indice: number = 0;
  public lista: any[] = [];

  constructor(public activateRoute: ActivatedRoute) {
    this.recibiendoDatos();
  }

  checklist() {
    return this.lista.length < 1;
  }

  llenarlista(nombre: string, direccion: string, lat: string, long: string) {
    const listp = {
      'id': this.indice,
      'nombre': nombre,
      'direccion': direccion,
      'latitud': lat,
      'longuitud': long
    }
    this.indice = this.indice + 1;
    this.lista.push(listp);
  }
  public recibiendoDatos() {
    this.activateRoute.queryParamMap.subscribe((data) => {
      if (data.get('nombre') != null) {
        this.llenarlista(data.get('nombre'), data.get('direccion')
          , data.get('latitud'), data.get('longitud'));
      }
    })
    this.activateRoute.queryParamMap.subscribe().closed;
  }
  ngOnInit() {
  }

}
