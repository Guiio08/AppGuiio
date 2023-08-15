import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  producto:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private _productosServices:ProductosService
    ) { 
    this.activatedRoute.params.subscribe( params => {
      this.producto = this._productosServices.getDetalleProducto( params['id']);
    })
  }

  ngOnInit(): void {
  }

}
