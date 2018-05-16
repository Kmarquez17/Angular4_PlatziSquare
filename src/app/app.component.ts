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
  lugares:any = [
    { active:true, nombre:'Floreria la gardenia'},
    { active:false, nombre:'Donas la pasadita'},
    { active:true, nombre:'Veterinaria Huellitas feliz'},
    { active:true, nombre:'Floreria la gardenia'},
    { active:false, nombre:'Donas la pasadita'},
    { active:true, nombre:'Veterinaria Huellitas feliz'},
    { active:true, nombre:'Floreria la gardenia'},
    { active:false, nombre:'Donas la pasadita'},
    { active:true, nombre:'Veterinaria Huellitas feliz'}
  ];
  lat:number = 12.1251293;
  lng:number = -86.224823;
  map:string = 'Maps'

  constructor(){
    setTimeout(() => {
        this.listo = true
    },2000)
  }

  hacerAlgo(){
    alert("Esto es angular..!!")
  }
}
