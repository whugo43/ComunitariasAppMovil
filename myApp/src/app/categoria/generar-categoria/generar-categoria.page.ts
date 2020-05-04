import { Component, OnInit } from '@angular/core';

import {CategoriaService} from '../../services/categoria.service';

@Component({
  selector: 'app-generar-categoria',
  templateUrl: './generar-categoria.page.html',
  styleUrls: ['./generar-categoria.page.scss'],
})
export class GenerarCategoriaPage implements OnInit {
  categorias: any={};

  constructor(public categoriaservice:CategoriaService) { }

  ngOnInit() {
  
  }

}
