import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generarproveedor',
  templateUrl: './generarproveedor.page.html',
  styleUrls: ['./generarproveedor.page.scss'],
})
export class GenerarproveedorPage implements OnInit {
  formData= new FormData();
  formularios={
    razonsocial: '',
    direccion: '',
    telefono:'',
    email:'',
    contacto:'',
    }

    constructor( ) { }

    ngOnInit() {  
    }

  postProveedor(){
    this.formData.append("razonsocial",this.formularios.razonsocial) 
    this.formData.append("direccion", this.formularios.direccion)
    this.formData.append("telefono", this.formularios.telefono)
    this.formData.append("email", this.formularios.email)
    this.formData.append("contacto", this.formularios.contacto)
  }
 

}

