import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login/login.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Logins 
  formularios={
    Username: '',
    Password: '',
    }

  constructor(public loginService: LoginService,
              public router: Router,
              public alertController: AlertController) { }

  ngOnInit() {  
  }

  async alertaError() {
    const alert = await this.alertController.create({
      header: 'Error de inicio de sesion',
      message: 'Algo salio mal, por favor, intente de nuevo',
      buttons: ['OK']
    });
    await alert.present();
  }

  validarlogin(form):void{
    
    const log={
      username: this.formularios.Username,
      password:this.formularios.Password
    };
  
    this.loginService.login(form.value)
      .subscribe(
        data => {
          let data_user = this.loginService.getDecodeAccessToken(data['token']);
          this.loginService.saveToken(data['token'], data_user.exp);
          this.router.navigateByUrl('/home');
        },
        error => this.alertaError()
      );

    console.log(form.value)
  }

}
