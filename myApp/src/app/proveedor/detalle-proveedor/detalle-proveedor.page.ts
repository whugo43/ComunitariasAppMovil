import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProviderService } from 'src/app/services/provider/provider.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-detalle-proveedor',
  templateUrl: './detalle-proveedor.page.html',
  styleUrls: ['./detalle-proveedor.page.scss'],
})
export class DetalleProveedorPage implements OnInit {
  id: string;
  provider=[];
  categorias;

  constructor(public providerservice: ProviderService,
              public router: Router,
              private cdRef : ChangeDetectorRef,
              private activateRoute: ActivatedRoute,
              public categoriaservice: CategoriaService) {
                
                 }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      const Id = paramMap.get('id')
      console.log(Id)
      this.id = Id
      this.providerservice.getProviderId(Id)
      .subscribe(
      (data)=>{this.provider=data;},
      (error)=>{console.log(error);}
      )
    });

    this.categoriaservice.getCategorias()
    .subscribe(
    (data)=>{this.categorias=data},
    (error)=>{console.log(error)}
    );
  }

}