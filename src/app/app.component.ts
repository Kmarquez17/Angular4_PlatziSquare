import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  a = 3;
  b = 14;
  listo = false;
  nombre:String = '';
  apellido:String = '';

  constructor(){
    setTimeout(() => {
        this.listo = true
    },2000)
  }

  hacerAlgo(){
    alert("Esto es angular..!!")
  }
}
