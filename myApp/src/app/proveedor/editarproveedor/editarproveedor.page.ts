import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {ProviderService} from '../../services/provider/provider.service';
@Component({
  selector: 'app-editarproveedor',
  templateUrl: './editarproveedor.page.html',
  styleUrls: ['./editarproveedor.page.scss'],
})
export class EditarproveedorPage implements OnInit {

  formularios={
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    categories: '',
    };
    provider=[];
    id: string;
    
  constructor(private activateRoute: ActivatedRoute, public providerservice: ProviderService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.providerservice.getProvider()
      .subscribe(
      (data)=>{this.provider=data},
      (error)=>{console.log(error)}
      );
    });
  }

  updateProvider(){

    let provider ={
      id: this.id,
      name: this.formularios.name,
      address: this.formularios.address,
      phoneNumber:this.formularios.phoneNumber,
      email: this.formularios.email,
      categories:this.formularios.categories
    };
    this.providerservice.updateProvider(provider, this.id)
      .subscribe(
      success => console.log('done'),
       error => console.log(error)
    );
    
  }

}

