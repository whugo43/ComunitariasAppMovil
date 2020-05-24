import { Component, OnInit } from '@angular/core';
import { DonacionesService } from '../services/donaciones/donaciones.service';
import {CategoriaService} from '../services/categoria/categoria.service';
import {ProviderService} from '../services/provider/provider.service';
import {CentroAcopioService} from '../services/centro-acopio/centro-acopio.service';

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
    (data)=>{this.categoria=data},
    (error)=>{console.log(error);}
    )
    console.log(this.categoria)
  }

  viewprovider(provider:string){
 
  }  

  deleteDonacion(id: string){
    this.donacionesService.deleteDonaciones(id).
    subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);}
      );   
    this.ngOnInit();    
  }

  deleteUpdateDonacion(id: string){
    this.donacionesService.updateDonaciones0(id).
    subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);}
      ); 
    this.ngOnInit();      
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();   
    }, 200);
  }
}
