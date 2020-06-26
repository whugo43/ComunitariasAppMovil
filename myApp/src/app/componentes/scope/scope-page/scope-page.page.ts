import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {ScopeService} from '../../../services/scope/scope.service';

@Component({
  selector: 'app-scope-page',
  templateUrl: './scope-page.page.html',
  styleUrls: ['./scope-page.page.scss'],
})
export class ScopePagePage implements OnInit {
  Scopes;

  constructor(public navCtrl: NavController,
              public alertController: AlertController,
              public modalController: ModalController,
              public scopeService:ScopeService) { }

  ngOnInit() {
    this.scopeService.getScope()
    .subscribe(
      (data)=>{this.Scopes=data
      },
      (error)=>{console.log(error);}
      );
  }

  agregarscopes(name,description){
    let formscope= new FormData();
    formscope.append("name",name) 
    formscope.append("description",description)
    formscope.append("createdBy","hugo Wong")
    this.scopeService.postScope(formscope).subscribe(
      (newTask)=>{console.log("metodo create");}
    ); 
  }

  async presentAlertScope() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nuevo Alcance',
      inputs: [
        {
          name: 'name',
          placeholder: 'Nombre',
          
        },
        {
          name: 'description',
          placeholder: 'Descripcion',
          type: 'textarea'
        }
      ],

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            if(data.name!= "" && data.description!=""){
              this.agregarscopes(data.name,data.description) 
            }else if(data.name== "" && data.description==""){
              this.failedAlert("Los campos nombres y descripcion son requeridos");
            }else if(data.name== ""){
              this.failedAlert("El campo nombre es requerido");
            }else if(data.description== ""){
              this.failedAlert("El campo descripcion es requerido");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async failedAlert(text) {
    const alert = await this.alertController.create({
     cssClass: 'my-custom-class',
     header: text,
    buttons: [{
    text: 'OK',
      handler: () => {
        this.presentAlertScope();
      }
    }]   
    });
    await alert.present();

  }

  async DeleteAlertScope(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Esta seguro que desea eliminar este alcance!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteScope(id)
          }
        }
      ]
    });
    await alert.present();
  }

  deleteScope(id: string){
    this.scopeService.deleteScope(id).
    subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);}
      ); 
      this.ngOnInit();       
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();   
    }, 200);
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

}
