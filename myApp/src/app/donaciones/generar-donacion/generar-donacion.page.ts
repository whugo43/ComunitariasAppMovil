import { Component, OnInit } from '@angular/core';
import { DonacionesService } from '../../services/donaciones.service';
import {CategoriaService} from '../../services/categoria.service';
import {ProviderService} from '../../services/provider.service';
import {CentroAcopioService} from '../../services/centro-acopio.service';

@Component({
  selector: 'app-generar-donacion',
  templateUrl: './generar-donacion.page.html',
  styleUrls: ['./generar-donacion.page.scss'],
})
export class GenerarDonacionPage implements OnInit {
  donaciones;
  centrosAcopios;
  providers;
  categoria;
  constructor(public donacionesService:DonacionesService,
              public categoriaservice: CategoriaService,
              public providerservice: ProviderService,
              public centroAcopioservice: CentroAcopioService) { }

  ngOnInit() {
    this.categoriaservice.getCategorias()
    .subscribe(
    (data)=>{this.categoria=data},
    (error)=>{console.log(error)}
    );
    
    this.providerservice.getPoviders()
    .subscribe(
    (data)=>{this.providers=data},
    (error)=>{console.log(error)}
    );

    this.centroAcopioservice.getCentrosAcopios()
    .subscribe(
    (data)=>{this.centrosAcopios=data},
    (error)=>{console.log(error)}
    );


  }
}
