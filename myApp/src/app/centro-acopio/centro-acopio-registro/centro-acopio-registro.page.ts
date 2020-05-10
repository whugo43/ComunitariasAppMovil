import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-centro-acopio-registro',
  templateUrl: './centro-acopio-registro.page.html',
  styleUrls: ['./centro-acopio-registro.page.scss'],
})
export class CentroAcopioRegistroPage implements OnInit {


  private registrationForm: FormGroup;

  constructor(private formBuilder:
    FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(10)]],
      direccion: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  ngOnInit() {
  }

  public check() {
    return this.registrationForm.get("nombre").value == '' ||
      this.registrationForm.get("direccion").value == '';
  }

  public sendData() {
    this.router.navigate(['../centro-acopio/ubicacion'], {
      queryParams: {
        nombre:this.registrationForm.get('nombre').value,
        direccion:this.registrationForm.get('direccion').value
      }
    });
  }

}
