//El archivo TS es que llevara la logica de cada componente del HTML el cual se llama dentro de el.
import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})

export class LugaresComponent {
  title = 'PlatziSquare';
  lat:number = 12.1251293;
  lng:number = -86.224823;
  map:string = 'Maps'
  lugares= null;

  constructor(private lugaresService: LugaresService){
    this.lugares = lugaresService.getLugares()
  }
}
