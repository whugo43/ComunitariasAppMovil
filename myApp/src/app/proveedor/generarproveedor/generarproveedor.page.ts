import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider/provider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-generarproveedor',
  templateUrl: './generarproveedor.page.html',
  styleUrls: ['./generarproveedor.page.scss'],
})
export class GenerarproveedorPage implements OnInit {
    formularios={
    name: '',
    address: '',
    phoneNumber:'',
    email:'',
    categories:'',
    };
    provider=[];
    id:string;
    
    providers: any ={};
    constructor(public providerservice: ProviderService,
                public router: Router
      
      ) { }

    ngOnInit() {  
    }

  postProvider() {
    const Provider = {
    name: this.formularios.name,
    address: this.formularios.address,
    phoneNumber:this.formularios.phoneNumber,
    email: this.formularios.email,
    categories:this.formularios.categories
    };
    this.providerservice.postProvider(this.formularios).subscribe(
        (newTask)=>{console.log(newTask);}
    );
    this.router.navigateByUrl('/provider')
    }
}

