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
  categorias;
  photo: File;
  formularios={
    photo: '',
    name: '',
    description: '',
    contactName:'',
    proveedor:'',
    centroacopio:'',
    categoria:'',
    createdBy: ''
    }

  constructor(public donacionesService:DonacionesService,
              public categoriaservice: CategoriaService,
              public providerservice: ProviderService,
              public centroAcopioservice: CentroAcopioService) { }

  ngOnInit() {
    this.categoriaservice.getCategorias()
    .subscribe(
    (data)=>{this.categorias=data},
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

  postDonaciones(){
    const formData= new FormData();
    formData.append("name",this.formularios.name) 
    formData.append("contactName", this.formularios.contactName) 
    formData.append("description",this.formularios.description) 
    formData.append("photo",this.photo) 
    formData.append("createdBy", this.formularios.createdBy)
    console.log("metodo create")
    console.log("metodo categoria")
    console.log(this.formularios.categoria)
    console.log("metodo proveedor")
    console.log(this.formularios.proveedor)
    console.log("metodo centroacopio")
    console.log(this.formularios.categoria)
  }

  changeListener($event) : void {
    this.photo = $event.target.files[0];
  }

}
