import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { CentroAcopioPage } from '../centro-acopio.page'
import { CentroAcopioService } from '../../services/centro-acopio/centro-acopio.service'
import { CreteByService } from '../../services/create-by.service'

@Component({
  selector: 'app-centro-acopio-registro',
  templateUrl: './centro-acopio-registro.page.html',
  styleUrls: ['./centro-acopio-registro.page.scss'],
})
export class CentroAcopioRegistroPage implements OnInit {

  private c: CentroAcopioPage;
  public registrationForm: FormGroup;
  private accionEditar: number = 0;
  private centroAcopioId: any;
  private formData = new FormData();
  static photo: File;
  private file: any;
  private reader: FileReader;
  private imageSrc: any;

  constructor(private formBuilder:
    FormBuilder, private router: Router, public activateRoute: ActivatedRoute, 
    private centroAcopioapi: CentroAcopioService, private createBy:CreteByService) {
    
  }

  removeImage(idButton: any) {
    if (CentroAcopioRegistroPage.photo != null) {
      idButton.value = '';
      CentroAcopioRegistroPage.photo = null;
      this.reader = null;
      this.imageSrc = null;
      this.file = null;
    }
  }

  changeListener($event): void {
    CentroAcopioRegistroPage.photo = $event.target.files[0];
  }

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      CentroAcopioRegistroPage.photo = event.target.files[0];

      this.reader = new FileReader();
      this.reader.onload = e => this.imageSrc = this.reader.result;

      this.reader.readAsDataURL(this.file);
    }
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      direccion: ['', [Validators.required, Validators.maxLength(100)]],
      nombre_persona_contacto: ['', [Validators.required, Validators.maxLength(100)]],
      telefono_persona_contacto: ['', [Validators.required,Validators.pattern('[0-9]{11}')]]
    });
    this.opcionEditar();
  }

  public opcionEditar() {
    this.activateRoute.queryParamMap.subscribe(dato => {
      if (dato.get('editar') == "1" && this.accionEditar == 0) {
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
  validation_messages = {
    'telefono_persona_contacto': [
        { type: 'pattern', message: 'Solo los números son permitidos, con una maxima \n longuitud de 11 caracteres, empezando con 09' },
      ],
    }

  public check() {
    return this.registrationForm.invalid;
  }

  public sendData() {
    /**Enviando los datos a la siguiente pagina(Ubicacion) y la opcion de edicion*/
    if (this.accionEditar) {
      this.router.navigate(['../centro-acopio/ubicacion'], {
        queryParams: {
          nombre: this.registrationForm.get('nombre').value,
          direccion: this.registrationForm.get('direccion').value,
          nombre_contact: this.registrationForm.get('nombre_persona_contacto').value,
          telefono_contact: this.registrationForm.get('telefono_persona_contacto').value,
          photo: CentroAcopioRegistroPage.photo,
          accionEditar: "1",
          id: this.centroAcopioId,
        }
      });
    } else {
      this.router.navigate(['../centro-acopio/ubicacion'], {
        queryParams: {
          nombre: this.registrationForm.get('nombre').value,
          direccion: this.registrationForm.get('direccion').value,
          nombre_contact: this.registrationForm.get('nombre_persona_contacto').value,
          telefono_contact: this.registrationForm.get('telefono_persona_contacto').value,
          photo: CentroAcopioRegistroPage.photo,
          accionEditar: '0',
        }
      });
    }
  }

  public enviarDatosOk() {
    /**Agregando las actualizavciones sin en el sin tener que ingresar una nueva
     * ubicacion
     */
    this.formData.append('name', this.registrationForm.get('nombre').value);
    this.formData.append('address', this.registrationForm.get('direccion').value);
    this.formData.append('contactName', this.registrationForm.get('nombre_persona_contacto').value);
    this.formData.append('contactPhone', this.registrationForm.get('telefono_persona_contacto').value);
    this.formData.append('photo', CentroAcopioRegistroPage.photo);
    this.centroAcopioapi.getCentroAcopioId(this.centroAcopioId).subscribe(dato_final => {
      this.formData.append('latitude', dato_final['latitude']);
      this.formData.append('longitude', dato_final['longitude']);
      this.formData.append('createdBy', this.createBy.getNombre());
    });

    if (this.accionEditar > 0) {
      this.centroAcopioapi.updateCentroAcopio(this.formData, this.centroAcopioId).subscribe((newTask) => {
        { console.log(newTask) }
      });
      this.accionEditar = 0;
    }
    this.router.navigate(['../centro-acopio']);
  }

  verificarEdicion() {
    return this.accionEditar == 1;
  }

}
