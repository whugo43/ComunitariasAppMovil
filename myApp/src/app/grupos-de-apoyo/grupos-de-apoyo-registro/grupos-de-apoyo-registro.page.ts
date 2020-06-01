import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service'
import { GrupoService } from '../../services/grupo-service/grupo.service'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { User } from '../../clases/user/user'

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
  private usuarioid: any;
  private exito: number = 0;

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  constructor(private formBuilder:
    FormBuilder, private formBuilderUser: FormBuilder, private conexionUser: LoginService,
    private conexionGrupos: GrupoService, public alertController: AlertController,
    private router: Router) {

    this.registrationFormGrupo = this.formBuilder.group({
      members: [],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      user: '',
    });

    this.registrationFormUser = this.formBuilderUser.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(100)]],
      createBy: ['mi', [Validators.required, Validators.maxLength(50)]]
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
    formDataUser.append('createdBy', 'mi');
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

  ngOnInit() {

  }

}
