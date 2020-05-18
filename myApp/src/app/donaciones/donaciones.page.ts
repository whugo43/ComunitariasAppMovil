import { Component, OnInit } from '@angular/core';
import { DonacionesService } from '../services/donaciones.service';
import {CategoriaService} from '../services/categoria.service';
import {ProviderService} from '../services/provider.service';
import {CentroAcopioService} from '../services/centro-acopio.service';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.page.html',
  styleUrls: ['./donaciones.page.scss'],
})
export class DonacionesPage implements OnInit {
  donaciones
  categoria
  proveedor
  constructor(public donacionesService:DonacionesService,
              public categoriaservice: CategoriaService,
              public providerservice: ProviderService,
              public centroAcopioservice: CentroAcopioService ) { }

  ngOnInit() {
    this.donacionesService.getDonaciones()
    .subscribe(
      (data)=>{this.donaciones=data},
      (error)=>{console.log(error);}
      )
  }

  viewcategoria(categoria:string){
    this.categoriaservice.getCategoriaId(categoria)
    .subscribe(
    (data)=>{this.categoria.name=data},
    (error)=>{console.log(error);}
    )
  }


  viewprovider(provider:string){
 
  }  

  deleteCampaign(id: string){
    this.donacionesService.deleteDonaciones(id).
    subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);}
      );       
  }

  deleteUpdateCampaign(id: string){
    this.donacionesService.updateDonaciones0(id).
    subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);}
      );       
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();   
    }, 200);
  }
}
