import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProviderService } from '../services/provider/provider.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaContactosService } from '../services/lista-contactos/lista-contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
})
export class ListaContactosPage implements OnInit {
  id: any;
  provider;
  contactos;

  constructor(public providerservice: ProviderService,
    public router: Router,
    private cdRef : ChangeDetectorRef,
    private activateRoute: ActivatedRoute,
    public listacontactosService: ListaContactosService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const Id = paramMap.get('id')
      console.log(Id+ "contactos")
      this.id = Id

     
    });
    this.listacontactosService.getContactos()
    .subscribe(
      (data)=>{this.contactos=data;},
      (error)=>{console.log(error);}
      )
  }
  generarcontacto(){
    this.router.navigateByUrl("generar-contactos/"+this.id);
  }
  editarcontacto(id:string){
    this.router.navigateByUrl("generar-contactos/"+id);
  }

  dirigirpantalla(){
    this.router.navigateByUrl("provider/detalleproveedor/"+this.id);
  }


  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();   
    }, 200);
  }

  

}
