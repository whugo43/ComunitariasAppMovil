import { Component, OnInit } from '@angular/core';
import { DonacionesService } from '../services/donaciones.service';
import {CategoriaService} from '../services/categoria.service';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.page.html',
  styleUrls: ['./donaciones.page.scss'],
})
export class DonacionesPage implements OnInit {
  donaciones
  categoria
  proveedor
  constructor(public donacionesService:DonacionesService,public campaignservice: CategoriaService ) { }

  ngOnInit() {
    this.donacionesService.getDonaciones()
    .subscribe(
      (data)=>{this.donaciones=data},
      (error)=>{console.log(error);}
      )
  }

  viewcategoria(categoria:string){
    this.campaignservice.getCategoriaId(categoria)
    .subscribe(
    (data)=>{this.categoria.name=data},
    (error)=>{console.log(error);}
    )
  }

  viewprovider(provider:string){
    this.campaignservice.getCategoriaId(provider)
    .subscribe(
    (data)=>{this.proveedor.name=data},
    (error)=>{console.log(error);}
    )
  }  
}
