import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { CentroAcopioPage } from '../centro-acopio.page'
import { CentroAcopioService } from '../../services/centro-acopio.service'

@Component({
  selector: 'app-centro-acopio-registro',
  templateUrl: './centro-acopio-registro.page.html',
  styleUrls: ['./centro-acopio-registro.page.scss'],
})
export class CentroAcopioRegistroPage implements OnInit {

  private c: CentroAcopioPage;
  private registrationForm: FormGroup;
  private accionEditar: boolean = false;
  private centroAcopioId: any;

  constructor(private formBuilder:
    FormBuilder, private router: Router, public activateRoute: ActivatedRoute, private centroAcopioapi: CentroAcopioService) {
    this.registrationForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      direccion: ['', [Validators.required, Validators.maxLength(100)]],
    });
    this.opcionEditar();
  }

  ngOnInit() {
  }

  public opcionEditar() {
    this.activateRoute.queryParamMap.subscribe(dato => {
      if (dato.get('editar')=="1") {
        this.accionEditar = true;
        console.log(dato);
        this.centroAcopioId=dato.get('centroAcopioId');
        this.centroAcopioapi.getCentroAcopioId(this.centroAcopioId).subscribe(dato_final => {
          this.registrationForm.setValue({
            nombre: dato_final['name'],
            direccion: dato_final['address'],
          });
        });
      }
    });
  }

  public check() {
    return this.registrationForm.get("nombre").value == '' ||
      this.registrationForm.get("direccion").value == '';
  }

  public sendData() {
    if(this.accionEditar){
      this.router.navigate(['../centro-acopio/ubicacion'], {
        queryParams: {
          nombre: this.registrationForm.get('nombre').value,
          direccion: this.registrationForm.get('direccion').value,
          accionEditar: "1",
          id:this.centroAcopioId,
        }
      });
    }else{
      this.router.navigate(['../centro-acopio/ubicacion'], {
        queryParams: {
          nombre: this.registrationForm.get('nombre').value,
          direccion: this.registrationForm.get('direccion').value,
          accionEditar:'0',
        }
      });
    }
  }

}
