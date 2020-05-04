import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-detalle-proveedor',
  templateUrl: './detalle-proveedor.page.html',
  styleUrls: ['./detalle-proveedor.page.scss'],
})
export class DetalleProveedorPage implements OnInit {

  proveedor =[];


  constructor(private activateRoute: ActivatedRoute,private ProveedorService: ProveedorService) { }

  ngOnInit() {
     this.activateRoute.paramMap.subscribe(paramMap => {
       const recipeId = paramMap.get('proveedorId')
       this.ProveedorService.getProveedor(recipeId).subscribe(data =>{
        this.proveedor = data
       })
     })
  }

}
