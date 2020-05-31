import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})


export class ContactsPage implements OnInit {
          
  constructor(public navCtrl: NavController,
              public alertController: AlertController,
              public modalController: ModalController) { }

  ngOnInit() {
  }

}
 
 
