import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { ProductosService } from './services/productos.service';
import { ColoresService } from './services/colores.service';


//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ModColoresComponent } from './components/shared/mod-colores/mod-colores.component';
import { CheckProductosComponent } from './components/check-productos/check-productos.component';
import { TallajeComponent } from './components/tallaje/tallaje.component';
import { DetalleAntifluidoComponent } from './components/shared/detalle-antifluido/detalle-antifluido.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DetalleProductoComponent,
    ModColoresComponent,
    CheckProductosComponent,
    TallajeComponent,
    DetalleAntifluidoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],


  //Aquí van todos los servicios
  providers: [
    ProductosService,
    ColoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
