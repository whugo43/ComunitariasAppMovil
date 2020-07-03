import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.page.html',
  styleUrls: ['./resetpwd.page.scss'],
})
export class ResetpwdPage implements OnInit {

  constructor(
    public router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
  }
  public resetpwdForm;
  emailChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;
  let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.resetpwdForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])]
    });
  }

}
