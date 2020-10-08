import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { AlertController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Logins
  formularios = {
    Username: '',
    Password: '',
  }

  constructor(public loginService: LoginService,
    public router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  async alertaError(sms: any) {
    const alert = await this.alertController.create({
      header: 'Error de inicio de sesion',
      message: 'Algo salio mal, por favor, intente de nuevo-- ' + sms,
      buttons: ['OK']
    });
    await alert.present();
  }
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }



  async validarlogin(form: FormGroup) {
    this.loginService.loginAxios(form.value['username'],form.value['password']).then(axiosPromise=>{
      let data_user = this.loginService.getDecodeAccessToken(axiosPromise.data['token']);
          this.loginService.saveToken(
              axiosPromise.data['token'], 
              data_user.exp, 
              data_user.role,
              data_user.email,
              data_user.username,
              data_user.user_id,
          );
          this.router.navigateByUrl('/home');
    }).catch(error=>{
      this.alertaError("ha ocurrido un error por favor intente mas tarde")
    })
  }

}
