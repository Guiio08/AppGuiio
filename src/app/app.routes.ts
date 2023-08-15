import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'; 
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';/*
import { Name3Component } from './';
import { Name4Component } from './';
import { PageNotFoundComponent } from './'; */

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'detalle-producto/:id', component: DetalleProductoComponent},
    /* { path: 'path2', component: Name2Component },
    { path: 'path3', component: Name3Component },
    { path: 'path4', component: Name4Component }, */
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
