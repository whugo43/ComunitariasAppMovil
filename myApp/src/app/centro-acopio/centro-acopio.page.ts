import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CentroAcopioService } from "../services/centro-acopio.service"

@Component({
  selector: 'app-centro-acopio',
  templateUrl: './centro-acopio.page.html',
  styleUrls: ['./centro-acopio.page.scss'],
})
export class CentroAcopioPage implements OnInit {
  public indice: number = 0;
  public lista: any[] = [];
  public accionEditar: boolean = false;
  public seleccionado: any;
  private ApiAcopio:CentroAcopioService;

  constructor(public activateRoute: ActivatedRoute, private conexionApi: CentroAcopioService,) {
    this.recibiendoDatosApi();
  }

  checklist() {
    return this.lista.length < 1;
  }

  public recibiendoDatosApi() {
    /* Recibiendo los datos guardados de la api*/
    this.conexionApi.getCentrosAcopios().subscribe(data => {
      data.forEach(f=>{
        this.lista.push(f);
      });
    });
    console.log(this.lista);
  }

  ngOnInit() {
  }

  public eliminar(){
    
  }

  public editar(id: string) {
    this.accionEditar = true;
    this.seleccionado = this.bucarid(id);
  }

  public bucarid(id: string) {
    this.lista.forEach(data => {
      if (data.id == id) {
        this.seleccionado = data;
      }
    });
  }
}
