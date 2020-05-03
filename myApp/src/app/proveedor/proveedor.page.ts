import { Component, OnInit } from '@angular/core';
import { ProveedorService } from './proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.page.html',
  styleUrls: ['./proveedor.page.scss'],
})
export class ProveedorPage implements OnInit {

  proveedores = [];

  constructor(private ProveedorService: ProveedorService) { }

  ngOnInit() {
    this.ProveedorService.getProveedores().subscribe(data => {
        this.proveedores = data;
      })
  }

}
