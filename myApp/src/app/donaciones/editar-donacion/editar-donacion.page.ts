import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import {ActivatedRoute } from '@angular/router';
import { DonacionesService } from '../../services/donaciones.service';
import {CategoriaService} from '../../services/categoria.service';
import {ProviderService} from '../../services/provider.service';
import {CentroAcopioService} from '../../services/centro-acopio.service';


@Component({
  selector: 'app-editar-donacion',
  templateUrl: './editar-donacion.page.html',
  styleUrls: ['./editar-donacion.page.scss'],
})
export class EditarDonacionPage implements OnInit {
  id: string;
  donaciones=[];
  centrosAcopios;
  providers;
  categorias;
  photo: File;
  formData= new FormData();
  formularios={
    photo: '',
    description: '',
    proveedor:'',
    centroacopio:'',
    categoria:'',
    BeginDate:'',
    ExpirationDate:'',
    createdBy: ''
    }
  

  constructor(private datePipe: DatePipe,
              private activateRoute: ActivatedRoute,
              public donacionesService:DonacionesService,
              public categoriaservice: CategoriaService,
              public providerservice: ProviderService,
              public centroAcopioservice: CentroAcopioService) { 
                this.activateRoute.paramMap.subscribe(paramMap => {
                  const donaciones = paramMap.get('id')
                  this.id = donaciones
                  this.donacionesService.getDonacionesId(donaciones)
                  .subscribe(
                  (data)=>{this.donaciones=data},
                  (error)=>{console.log(error);}
                  )
                });  
              }

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
    this.formData.append("description",this.formularios.description) 

    
    if(this.formularios.BeginDate.length>0){
      this.formData.append('beginDate',this.formularios.BeginDate)
      console.log(this.formularios.BeginDate)
    }
    
    if(this.formularios.ExpirationDate.length>0){
      this.formData.append('expirationDate',this.datePipe.transform(this.formularios.ExpirationDate,"yyyy-MM-dd"))
    }
    
    this.formData.append("provider", this.formularios.proveedor)
    this.formData.append("collectionCenter", this.formularios.centroacopio)
    this.formData.append("category", this.formularios.categoria)
    this.donacionesService.updateDonaciones(this.formData,this.id).subscribe(
      (newTask)=>{console.log(newTask);}
    );
  }

  changeListener($event) : void {
    this.photo = $event.target.files[0];
    this.formData.append("photo",this.photo) 
  }


}
