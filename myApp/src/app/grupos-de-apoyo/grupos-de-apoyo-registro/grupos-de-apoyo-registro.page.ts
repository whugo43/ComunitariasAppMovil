import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service'
import { GrupoService } from '../../services/grupo-service/grupo.service'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grupos-de-apoyo-registro',
  templateUrl: './grupos-de-apoyo-registro.page.html',
  styleUrls: ['./grupos-de-apoyo-registro.page.scss'],
})
export class GruposDeApoyoRegistroPage implements OnInit {
  private registrationFormGrupo: FormGroup;
  private registrationFormUser: FormGroup
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  private edicion: string = '';
  private idGrupoEdicion: string = '';

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  constructor(private formBuilder:
    FormBuilder, private conexionUser: LoginService,
    private conexionGrupos: GrupoService, public alertController: AlertController,
    private router: Router, private activatedRouter: ActivatedRoute) {

    this.registrationFormGrupo = this.formBuilder.group({
      members: [],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      user: '',
    });

    this.registrationFormUser = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.maxLength(100),Validators.email]],
      createBy: ['mi', [Validators.required, Validators.maxLength(50)]]
    });
    this.opcionEditar();
  }

  opcionEditar() {
    this.activatedRouter.queryParamMap.subscribe(data => {
      this.edicion = data.get('editar');
      if (this.edicion == 'editar') {
        this.idGrupoEdicion = data.get('idGrupo');
        this.conexionGrupos.getGrupoId(this.idGrupoEdicion).subscribe(grupo => {
          this.conexionUser.getUserId(grupo.user).subscribe(user => {
            this.registrationFormGrupo.setValue({
              members: grupo.members,
              name: grupo.name,
              user: grupo.user,
            });
            this.registrationFormUser = this.formBuilder.group({
              username: [user.username, [Validators.required, Validators.maxLength(50)]],
              password: [user.password, [Validators.required, Validators.maxLength(100)]],
              email: [user.email, [Validators.required, Validators.maxLength(100)]],
              createBy: ['mi', [Validators.required, Validators.maxLength(50)]]
            });
          });
        });
      }
    });

  }
  check() {
    return this.registrationFormGrupo.get('name').value == '' ||
      this.registrationFormUser.get('username').value == '' ||
      this.registrationFormUser.get('password').value == '';
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Especificacion del error',
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  sendData() {
    let formDataUser = new FormData();
    formDataUser.append('username', this.registrationFormUser.get('username').value);
    formDataUser.append('password', this.registrationFormUser.get('password').value);
    formDataUser.append('email', this.registrationFormUser.get('email').value);
    formDataUser.append('createdBy', 'mi');
    if (this.edicion == 'editar') {
      let data;
      this.conexionGrupos.getGrupoId(this.idGrupoEdicion).subscribe(grupo => {
        this.conexionUser.updateUser(formDataUser, grupo.user).subscribe();
        data = {
          "name": this.registrationFormGrupo.get('name').value,
          "createdBy": "mi",
          "user": grupo.user,
        }
        console.log(data)
        this.conexionGrupos.updateGrupo(data, this.idGrupoEdicion).subscribe(de => {
          console.log('Entro en editar');
          this.router.navigate(['../grupos-de-apoyo']);
        }, error => {
          console.log(error)
        });
      });

    } else {
      this.conexionUser.guardarUsuario(formDataUser).subscribe(
        (data) => {
          let postData = {
            "name": this.registrationFormGrupo.get('name').value,
            "createdBy": "mi",
            "user": data['id'],
          }
          this.conexionGrupos.guardarGrupo(postData).subscribe(
            newTask => {
              console.log(newTask);
              this.router.navigate(['../grupos-de-apoyo']);
            },
            error => {
              console.log(error);
            }
          );
        },
        error => {
          console.log(error);
          this.presentAlert('El nombre del usuario ya existe, por favor <strong>eliga otro nombre</strong>');
        });
    }
  }

  ngOnInit() {

  }


}
