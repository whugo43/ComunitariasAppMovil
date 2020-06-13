import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider/provider.service';

@Component({
  selector: 'app-generarproveedor',
  templateUrl: './generarproveedor.page.html',
  styleUrls: ['./generarproveedor.page.scss'],
})
export class GenerarproveedorPage implements OnInit {
    formularios={
    name: '',
    direction: '',
    cell:'',
    email:'',
    description:'',
    list:''
    };
    provider=[];
    id:string;
    
    providers: any ={};
    constructor(public providerservice: ProviderService) { }

    ngOnInit() {  
    }

  postProvider() {
    const Provider = {
    name: this.formularios.name,
    direction: this.formularios.direction,
    cell:this.formularios.cell,
    email: this.formularios.email,
    list:this.formularios.list
    };
    this.providerservice.postProvider(Provider).subscribe(
        (newTask)=>{console.log(newTask);}
    );
    }
}

