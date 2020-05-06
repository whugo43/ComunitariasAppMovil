import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.page.html',
  styleUrls: ['./distribucion.page.scss'],
})

export class DistribucionPage implements OnInit {
  private registrationForm: FormGroup;
  public group: any = [];
  public voluntarios: any = [];

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  get lugar_partida() {
    return this.registrationForm.get('lugar_partida');
  }
  get lugar_destino() {
    return this.registrationForm.get('lugar_destino');
  }
  get tipo_seleccion_encargado() {
    return this.registrationForm.get('tipo_seleccion_encargado');
  }
  get encargado() {
    return this.registrationForm.get('encargado');
  }
  get descripcion() {
    return this.registrationForm.get('descripcion');
  }

  public errorMessage = {
    lugar_partida: [
      { type: "required", message: "El lugar de partida es requerido" },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ],
    lugar_destino: [
      { type: "required", message: "El lugar de destino es requerido" },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ],
    tipo_seleccion_encargado: [
      { type: "required", message: "Por favor seleccione al tipo de encargado" },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ],
    encargado: [
      { type: "required", message: "Por favor seleccione a una persona encargada" },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ],
    descripcion: [
      { type: "required", message: "Texto para poder ingresar el contenido de las donaciones" },
      { type: 'maxlength', message: 'Name cant be longer than 200 characters' }
    ],

  }
 

  constructor(private formBuilder:
    FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      lugar_partida: ['', [Validators.required, Validators.maxLength(10)]],
      lugar_destino: ['', [Validators.required, Validators.maxLength(100)]],
      tipo_seleccion_encargado: ['', [Validators.required, Validators.maxLength(100)]],
      encargado: ['', [Validators.required, Validators.maxLength(100)]],
      descripcion: ['', [Validators.required, Validators.maxLength(200)]]
    });
  

  }

  public submit() {
    console.log(this.registrationForm.value);
  }

  public checkt() {
    return this.registrationForm.get("tipo_seleccion_encargado").value == '';
  }

  public llenar(ps:string){
    if(ps=='Voluntarios'){
      return this.voluntarios;
    }
    return this.group;
  }

  public llenargroup() {
    this.group = [
      {
        id: 1,
        nombre: 'Alice',
        apellido: 'Smith',
      },
      {
        id: 2,
        nombre: 'Bob',
        apellido: 'Davis',
      },
      {
        id: 3,
        nombre: 'Charlie',
        apellido: 'Rosenburg',
      }
    ]
  }

  public llenarvoluntarios() {
    this.voluntarios = [
      {
        id: 1,
        nombre: 'Davis',
        apellido: 'Federico',
      },
      {
        id: 2,
        nombre: 'Freddy',
        apellido: 'Bolivar',
      },
      {
        id: 3,
        nombre: 'Roberto',
        apellido: 'Serrano',
      }
    ]
  }
  
  ngOnInit() {
  }

  public isinValid(){
    return this.registrationForm.get('lugar_partida').value==''||
    this.registrationForm.get('lugar_destino').value==''||
     this.registrationForm.get('tipo_seleccion_encargado').value==''||
    this.registrationForm.get('encargado').value==''||
    this.registrationForm.get('descripcion').value=='';
  };

}