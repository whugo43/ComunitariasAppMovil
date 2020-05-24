import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { CentroAcopioPage } from '../centro-acopio.page'
import { CentroAcopioService } from '../../services/centro-acopio/centro-acopio.service'

@Component({
  selector: 'app-centro-acopio-registro',
  templateUrl: './centro-acopio-registro.page.html',
  styleUrls: ['./centro-acopio-registro.page.scss'],
})
export class CentroAcopioRegistroPage implements OnInit {

  private c: CentroAcopioPage;
  private registrationForm: FormGroup;
  private accionEditar: number = 0;
  private centroAcopioId: any;
  private formData = new FormData();

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
      if (dato.get('editar') == "1" && this.accionEditar==0) {
        this.accionEditar = 1;
        this.centroAcopioId = dato.get('centroAcopioId');
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
    if (this.accionEditar) {
      this.router.navigate(['../centro-acopio/ubicacion'], {
        queryParams: {
          nombre: this.registrationForm.get('nombre').value,
          direccion: this.registrationForm.get('direccion').value,
          accionEditar: "1",
          id: this.centroAcopioId,
        }
      });
    } else {
      this.router.navigate(['../centro-acopio/ubicacion'], {
        queryParams: {
          nombre: this.registrationForm.get('nombre').value,
          direccion: this.registrationForm.get('direccion').value,
          accionEditar: '0',
        }
      });
    }
  }

  public enviarDatosOk() {
    this.formData.append('name', this.registrationForm.get('nombre').value);
    this.formData.append('address',this.registrationForm.get('direccion').value);
    this.centroAcopioapi.getCentroAcopioId(this.centroAcopioId).subscribe(dato_final => {
      this.formData.append('latitude',dato_final['latitude']);
      this.formData.append('longitude', dato_final['longitude']);
      this.formData.append('createdBy', 'mi');
    });

    if (this.accionEditar > 0) {
      this.centroAcopioapi.updateCentroAcopio(this.formData, this.centroAcopioId).subscribe((newTask) => {
        { console.log(newTask) }
      });
      this.accionEditar = 0;
    }
    this.router.navigate(['../centro-acopio']);
  }

  verificarEdicion(){
    return this.accionEditar==1;
  }

}
