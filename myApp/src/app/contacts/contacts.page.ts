import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


import { PopoverController } from '@ionic/angular';
import {DonacionComponent} from '../componentes/donacion/donacion.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})


export class ContactsPage implements OnInit {
          
  constructor(public popoverController: PopoverController,
              public navCtrl: NavController,
              public alertController: AlertController,
              public modalController: ModalController) { }

  ngOnInit() {
  }
  async mostrarpop(ev: any,id){
    id=id;
      const popover = await this.popoverController.create({
        component: DonacionComponent,
        //cssClass: 'my-custom-class',
        event: ev,
        //translucent: true
        componentProps: {id: id, popoverController: this.popoverController} 
      });
      return await popover.present();

  }

}
 
 
