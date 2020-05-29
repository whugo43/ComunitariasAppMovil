import { Component, OnInit } from '@angular/core';
import { Grupo } from '../clases/grupo'
import { GrupoService } from '../services/grupo-service/grupo.service'
import { LoginService } from '../services/login/login.service'

@Component({
  selector: 'app-grupos-de-apoyo',
  templateUrl: './grupos-de-apoyo.page.html',
  styleUrls: ['./grupos-de-apoyo.page.scss'],
})
export class GruposDeApoyoPage implements OnInit {
  private gruposDeApoyo: Grupo[] = [];
  private nombreUser: string = '';

  constructor(private apiGrupoApoyo: GrupoService, private apiUser: LoginService) { }

  obtenerGruposdeapoyo() {
    this.apiGrupoApoyo.getGrupo().subscribe(grupos => {
      grupos.forEach(grupo => {
        this.apiUser.getLogins().subscribe(users => {
          users.forEach(user => {
            if (user.id == grupo.user) {
              grupo.nombreuser = user.username;
              return;
            }
          });
        });
        this.gruposDeApoyo.push(grupo);
      });
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 200);
  }

  ngOnInit() {
    this.obtenerGruposdeapoyo();
    console.log(this.gruposDeApoyo);
  }

  eliminarGrupodeApoyo(){
    
  }


}
