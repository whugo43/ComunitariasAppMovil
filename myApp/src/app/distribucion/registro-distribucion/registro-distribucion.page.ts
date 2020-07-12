import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from "@angular/router"
import { DistribucionService } from '../../services/distribucion/distribucion.service'
import { VoluntariosService } from '../../services/voluntarios/voluntarios.service'
import { GrupoService } from '../../services/grupo-service/grupo.service'
import { ActivatedRoute } from '@angular/router';
import { CreteByService } from '../../services/create-by.service'

@Component({
  selector: 'app-registro-distribucion',
  templateUrl: './registro-distribucion.page.html',
  styleUrls: ['./registro-distribucion.page.scss'],
})
export class RegistroDistribucionPage implements OnInit {
  private registrationForm: FormGroup;
  public lista: any[] = [];
  public voluntarios: any = [];
  public seleccion: string;
  private accionEditar: number = 0;
  private userId: number;
  private formData = new FormData();
  private distribucionId: string;

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
    FormBuilder, private activateRoute: ActivatedRoute, private conexionApi: DistribucionService,
    private conexionVoluntarios: VoluntariosService, private conexionGrupos: GrupoService,
    private router: Router, private createBy:CreteByService) {

  }

  llenarParametrosEdicion() {
    this.activateRoute.queryParamMap.subscribe((data) => {
      if (data.get('accionEditar') == '1' && this.accionEditar == 0) {
        console.log('edicion');
        this.accionEditar = 1;
        this.distribucionId = data.get('id');
        this.conexionApi.getDistribucionId(this.distribucionId).subscribe(distribuciones => {
          let tipo = '';
          let nombref = '';
          if (distribuciones.manager_type == '1') {
            tipo = 'Voluntarios';
            this.conexionVoluntarios.getVoluntarios().subscribe(voluntarios => {
              voluntarios.forEach(voluntario => {
                console.log(voluntario.user.toString() + '  ' + distribuciones.user.toString());
                if (voluntario.user.toString() == distribuciones.user.toString()) {
                  nombref = voluntario.user;
                  return;
                }
              });
            });
          } else {
            tipo = 'Grupos';
            this.conexionGrupos.getGrupo().subscribe(grupos => {
              grupos.forEach(grupo => {
                if (grupo.user.toString() == distribuciones.user.toString()) {
                  nombref = grupo.user;
                  return;
                }
              });
            });
          }
          console.log(nombref);
          this.seleccion = tipo;
          this.registrationForm.setValue({
            lugar_partida: distribuciones.departureAddress,
            lugar_destino: distribuciones.destinationAddress,
            encargado: {
              tipo_seleccion_encargado: tipo,
              nombre: nombref,
            },
            descripcion: distribuciones.information,
          });
        });
      }
    });
  }

  public submit() {
    console.log(this.registrationForm.value);
  }

  public checktEncargadoTipo() {
    return this.seleccion == '';
  }

  public llenarLista(tipo: string) {
    this.registrationForm.get('encargado').get('nombre').setValue("");
    this.lista = [];
    this.seleccion = tipo;
    if (tipo.trim() == 'Voluntarios') {
      this.conexionVoluntarios.getVoluntarios().subscribe(voluntarios => {
        voluntarios.forEach(voluntario => {
          this.lista.push({
            id: voluntario.id,
            name: voluntario.firstName,
            user: voluntario.user,
          });
        });
      });
    } else {
      this.conexionGrupos.getGrupo().subscribe(grupos => {
        grupos.forEach(grupo => {
          this.lista.push({
            id: grupo.id,
            name: grupo.name,
            user: grupo.user,
          });
        });
      });
    }
    this.lista = [];
  }

  llen(rt: number) {
    this.userId = rt;
  }

  public isinValid() {
    return this.registrationForm.get('lugar_partida').value == '' ||
      this.registrationForm.get('lugar_destino').value == '' ||
      this.registrationForm.get('encargado.tipo_seleccion_encargado').value == '' ||
      this.registrationForm.get('encargado.nombre').value == '' ||
      this.registrationForm.get('descripcion').value == '';
  };


  public enviarDatos() {
    this.formData.append('departureAddress', this.registrationForm.get('lugar_partida').value);
    this.formData.append('destinationAddress', this.registrationForm.get('lugar_destino').value);
    if (this.seleccion == 'Voluntarios') {
      this.formData.append('manager_type', "1");
    } else {
      this.formData.append('manager_type', "2");
    }
    this.formData.append('information', this.registrationForm.get('descripcion').value);
    this.formData.append('createdBy', this.createBy.getNombre());
    this.formData.append('user', this.registrationForm.get('encargado.nombre').value);
    if (this.accionEditar > 0) {
      this.conexionApi.actualizarDistribucion(this.formData, this.distribucionId).subscribe(msm => {
        console.log(msm);
      });
      this.accionEditar = 0;
    } else {
      console.log(this.formData);
      this.conexionApi.agregarDistribucion(this.formData);
    }
    this.router.navigate(['../distribucion']);
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      lugar_partida: ['', [Validators.required, Validators.maxLength(100)]],
      lugar_destino: ['', [Validators.required, Validators.maxLength(100)]],
      encargado: this.formBuilder.group({
        tipo_seleccion_encargado: ['', [Validators.required, Validators.maxLength(100)]],
        nombre: ['', [Validators.required, Validators.maxLength(100)]],
      }),
      descripcion: ['', [Validators.required, Validators.maxLength(200)]]
    });
    this.llenarParametrosEdicion();
  }

}
