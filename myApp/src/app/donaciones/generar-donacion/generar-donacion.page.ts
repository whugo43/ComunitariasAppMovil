import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { DonacionesService } from '../../services/donaciones/donaciones.service';
import {CategoriaService} from '../../services/categoria/categoria.service';
import {ProviderService} from '../../services/provider/provider.service';
import {CentroAcopioService} from '../../services/centro-acopio/centro-acopio.service';

@Component({
  selector: 'app-generar-donacion',
  templateUrl: './generar-donacion.page.html',
  styleUrls: ['./generar-donacion.page.scss'],
})
export class GenerarDonacionPage implements OnInit {
  imageSrc;
  donaciones;
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
              public donacionesService:DonacionesService,
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
    this.formData.append("description",this.formularios.description) 
    this.formData.append("photo",this.photo) 
    if(this.formularios.BeginDate.length>0){
      this.formData.append('beginDate',this.datePipe.transform(this.formularios.BeginDate,"yyyy-MM-dd"))
      
    }
    else{
      const fecha= new Date()
      const fechastr =this.datePipe.transform(fecha,"yyyy-MM-dd")
      this.formData.append('beginDate',fechastr)
    }

    if(this.formularios.ExpirationDate.length>0){
      this.formData.append('expirationDate',this.datePipe.transform(this.formularios.ExpirationDate,"yyyy-MM-dd"))
    }
    
    this.formData.append("provider", this.formularios.proveedor)
    this.formData.append("collectionCenter", this.formularios.centroacopio)
    this.formData.append("category", this.formularios.categoria)
    this.formData.append("createdBy", this.formularios.createdBy)

    this.donacionesService.postDonaciones(this.formData).subscribe(
      (newTask)=>{console.log(newTask);}
    );
  }

  changeListener($event) : void {
    this.photo = $event.target.files[0];
  }

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        this.photo = event.target.files[0];
        this.formData.append("photo",this.photo)

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(file);
    }
}
removePic() {
  this.imageSrc = null;
}

}
