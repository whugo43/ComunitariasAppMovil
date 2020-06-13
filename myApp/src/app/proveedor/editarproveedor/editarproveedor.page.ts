import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {ProviderService} from '../../services/provider/provider.service';
import {Provider} from '../../interfaces/provider';
@Component({
  selector: 'app-editarproveedor',
  templateUrl: './editarproveedor.page.html',
  styleUrls: ['./editarproveedor.page.scss'],
})
export class EditarproveedorPage implements OnInit {

  formularios={
    name: '',
    description: '',
    cell: '',
    direction:'',
    email:'',
    list:''
    };
    provider=[];
    id: string;
    
  constructor(private activateRoute: ActivatedRoute,public providerservice:ProviderService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const providerId = paramMap.get('providerId')
      this.id = providerId
      this.providerservice.getProviderId(providerId)
      .subscribe(
      (data)=>{this.provider=data},
      (error)=>{console.log(error);}
      )
    });
  }

  updateProvider(){

    let provider ={
      id: this.id,
      name: this.formularios.name,
      direction: this.formularios.direction,
      cell:this.formularios.cell,
      email: this.formularios.email,
      list:this.formularios.list,
    };
    this.providerservice.updateProvider(provider,this.id)
      .subscribe(
      success => console.log('done'),
       error => console.log(error)
    );
    
  }

}

