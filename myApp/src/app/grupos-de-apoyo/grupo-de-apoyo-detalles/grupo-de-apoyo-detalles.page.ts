import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GrupoService } from '../../services/grupo-service/grupo.service'
import { LoginService } from '../../services/login/login.service'
import { Grupo } from '../../clases/grupo/grupo';
import { GroupMember } from '../../clases/miembros-grupos/group-member'

@Component({
  selector: 'app-grupo-de-apoyo-detalles',
  templateUrl: './grupo-de-apoyo-detalles.page.html',
  styleUrls: ['./grupo-de-apoyo-detalles.page.scss'],
})
export class GrupoDeApoyoDetallesPage implements OnInit {
  public idGrupo: string = '';
  public miembros: GroupMember[] = [];
  public grupo: Grupo = new Grupo();


  constructor(private navegacion: ActivatedRoute, private apiUser: LoginService
    , private conexionGrupo: GrupoService) { }

  ngOnInit() {
    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    this.navegacion.queryParamMap.subscribe(datos => {
      this.conexionGrupo.getGrupoId(datos.get('idGrupo')).subscribe(grupoc=>{
        this.grupo=grupoc;
        this.miembros=grupoc.members;
      });
    });
    
  }

}
