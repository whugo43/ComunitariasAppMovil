import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-centro-acopio-registro',
  templateUrl: './centro-acopio-registro.page.html',
  styleUrls: ['./centro-acopio-registro.page.scss'],
})
export class CentroAcopioRegistroPage implements OnInit {

  
  private registrationForm: FormGroup;
  
  constructor(private formBuilder:
    FormBuilder) { 
    this.registrationForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(10)]],
      direccion: ['', [Validators.required, Validators.maxLength(100)]],
      ubicacion_map : this.formBuilder.group({
        latitud:'',
        longuitud:'',
      })
    });
  }

  ngOnInit() {
  }
 
  public check(){
    return this.registrationForm.get("nombre").value==''||
    this.registrationForm.get("direccion").value=='';
  }

}
