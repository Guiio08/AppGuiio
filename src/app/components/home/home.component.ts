import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos:Producto [] = [];
  

  constructor(private _productosService:ProductosService,
              private appComponent: AppComponent
    ) { }

  ngOnInit(): void {
    this.productos = this._productosService.getProductos();
  }
  ejecutarCambioCheck(): void {
    this.appComponent.estadoCheck();
  }

}
