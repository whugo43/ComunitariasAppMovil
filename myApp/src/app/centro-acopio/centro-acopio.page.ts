import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-centro-acopio',
  templateUrl: './centro-acopio.page.html',
  styleUrls: ['./centro-acopio.page.scss'],
})
export class CentroAcopioPage implements OnInit {

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
}
