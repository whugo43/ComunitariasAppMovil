import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.page.html',
  styleUrls: ['./distribucion.page.scss'],
})

export class DistribucionPage implements OnInit {

  public distribucion_registrada: any[] = [];
  public indice: number = 0;

  constructor(private activateRoute: ActivatedRoute) {
    this.recibiendo_Datos();
  }

  public recibiendo_Datos() {
    this.activateRoute.queryParamMap.subscribe((data) => {
      if (data.get('lugar_partida') != null) {
        this.llenarlista(data.get('lugar_partida'), data.get('lugar_destino')
          , data.get('encargado_tipo'), data.get('encargado_nombre'), data.get('informacion'));
      }
    })
    this.activateRoute.queryParamMap.subscribe().closed;
  }

  llenarlista(lugar_partida: string, lugar_destino: string,
    encargado_tipo: string,encargado_nombre:string, informacion: string) {
    const listp = {
      'id': this.indice,
      'lugar_partida': lugar_partida,
      'lugar_destino': lugar_destino,
      'encargado': {
        'tipo_seleccion_encargado': encargado_tipo,
        'nombre': encargado_nombre,
      },
      'informacion': informacion
    }
    this.indice = this.indice + 1;
    this.distribucion_registrada.push(listp);
  }
  ngOnInit() {
  }

}
