import { Component, OnInit } from '@angular/core';
import { ColoresService, Color } from '../../../services/colores.service';


@Component({
  selector: 'app-mod-colores',
  templateUrl: './mod-colores.component.html',
  styleUrls: ['./mod-colores.component.scss']
})
export class ModColoresComponent implements OnInit {
  
  colores:Color [] = [];

  constructor(private _coloresService:ColoresService,
              
    ) { }

  

  ngOnInit(): void {
    this.colores = this._coloresService.getColores();
    console.log(this.colores);
  }
  
  

}
