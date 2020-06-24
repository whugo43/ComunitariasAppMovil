import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { DatePipe } from "@angular/common";

import { Geolocation } from "@ionic-native/geolocation/ngx"
import { CategoriaService } from './services/categoria/categoria.service';
import { DonacionesService } from './services/donaciones/donaciones.service';
import { CampaignService } from './services/campaign/campaign.service';
import { CentroAcopioService } from './services/centro-acopio/centro-acopio.service';
import { LoginService } from './services/login/login.service';
import {ScopeService} from './services/Scope/scope.service';
import {ProviderService} from './services/provider/provider.service';
import {VoluntariosService} from './services/voluntarios/voluntarios.service';
import {ActivityService} from './services/activity/activity.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatePipe,
    CategoriaService,
    DonacionesService,
    Geolocation,
    CampaignService,
    CentroAcopioService,
    ScopeService,
    LoginService,
    ProviderService,
    VoluntariosService,
    ActivityService
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
