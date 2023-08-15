import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  mostrarCheck: boolean = true;

  estadoCheck(): void{
    this.mostrarCheck =! this.mostrarCheck;
  }

  title = 'DimagApp';
}
