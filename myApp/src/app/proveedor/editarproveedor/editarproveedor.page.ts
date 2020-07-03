import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {ProviderService} from '../../services/provider/provider.service';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
@Component({
  selector: 'app-editarproveedor',
  templateUrl: './editarproveedor.page.html',
  styleUrls: ['./editarproveedor.page.scss'],
})
export class EditarproveedorPage implements OnInit {
  providercateg=[]

  formularios={
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    categories: '',
    };
    formData= new FormData();
    provider=[];
    id: string;
    categorias;
    
  constructor(public providerservice: ProviderService,
              public router: Router,
              private cdRef : ChangeDetectorRef,
              private activateRoute: ActivatedRoute,
              public categoriaservice: CategoriaService) { 
                this.activateRoute.paramMap.subscribe(paramMap => {
                  const Id = paramMap.get('id')
                  console.log(Id)
                  this.id = Id
                  this.providerservice.getProviderId(Id)
                  .subscribe(
                  (data)=>{this.provider=data;
                          this.providercateg=data.categories},
                  (error)=>{console.log(error);}
                  )
                });
              }

  ngAfterContentChecked() {
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.categoriaservice.getCategorias()
    .subscribe(
    (data)=>{this.categorias=data},
    (error)=>{console.log(error)}
    );
  }

  updateProvider(){

    this.formData.append("name", this.formularios.name)
    this.formData.append("address", this.formularios.address)
    this.formData.append("phoneNumber", this.formularios.phoneNumber)
    this.formData.append("email", this.formularios.email)
    for (let index = 0; index <  this.formularios.categories.length; index++) {
      this.formData.append('categories',  this.formularios.categories[index]);      
    }
    
    this.providerservice.updateProvider(this.formData,this.id).subscribe(
      (newTask)=>{console.log(newTask);}
      );
  
    this.router.navigateByUrl('/provider')
  }

}

