import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import {ActivatedRoute } from '@angular/router';
import { DonacionesService } from '../../services/donaciones.service';
import {CategoriaService} from '../../services/categoria.service';
import {ProviderService} from '../../services/provider.service';
import {CentroAcopioService} from '../../services/centro-acopio.service';

@Component({
  selector: 'app-detalle-donacion',
  templateUrl: './detalle-donacion.page.html',
  styleUrls: ['./detalle-donacion.page.scss'],
})
export class DetalleDonacionPage implements OnInit {
  donacion=[];
  categoria=[];
  proveedor=[];
  centroacopio=[];

  constructor(private datePipe: DatePipe,
    private activateRoute: ActivatedRoute,
    public donacionesService:DonacionesService,
    public categoriaservice: CategoriaService,
    public providerservice: ProviderService,
    public centroAcopioservice: CentroAcopioService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const donaciones = paramMap.get('id')
      this.donacionesService.getDonacionesId(donaciones)
      .subscribe(
      (data)=>{this.donacion=data,
              this.view(data.category, data.provider, data.collectionCenter);},
      (error)=>{console.log(error);}
      )
    });
  }

  view(idcategoria, idproveedor, idcentroacopio){
    this.categoriaservice.getCategoriaId(idcategoria)
    .subscribe(
      (data)=>{this.categoria=data},
      (error)=>{console.log(error);}
    );
    this.providerservice.getPoviderId(idproveedor)
    .subscribe(
      (data)=>{this.proveedor=data},
      (error)=>{console.log(error);}
    );

    this.centroAcopioservice.getCentroAcopioId(idcentroacopio)
    .subscribe(
      (data)=>{this.centroacopio=data},
      (error)=>{console.log(error);}
    );
  }

}
