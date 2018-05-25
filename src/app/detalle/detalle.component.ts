import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {
  lugares:any = [
    {id:1 ,plan:"pagado", cercania:1, distancia:1.8 , active:false, nombre:'Donas la pasadita', description:'Aqui va una descripcion del lugar'},
    {id:2 ,plan:"gratuito", cercania:1, distancia:1 , active:true, nombre:'Floreria la gardenia', description:'Aqui va una descripcion del lugar'},
    {id:3 ,plan:"pagado", cercania:2, distancia:5 , active:true, nombre:'Veterinaria Huellitas feliz', description:'Aqui va una descripcion del lugar'},
    {id:4 ,plan:"gratuito", cercania:2, distancia:10 , active:true, nombre:'Floreria la gardenia', description:'Aqui va una descripcion del lugar'},
    {id:5 ,plan:"pagado", cercania:3, distancia:35, active:false, nombre:'Donas la pasadita', description:'Aqui va una descripcion del lugar'},
    {id:6 ,plan:"gratuito", cercania:3, distancia:120 , active:true, nombre:'Veterinaria Huellitas feliz', description:'Aqui va una descripcion del lugar'},
    {id:7 ,plan:"pagado", cercania:3, distancia:10 , active:true, nombre:'Floreria la gardenia', description:'Aqui va una descripcion del lugar'},
    {id:8 ,plan:"gratuito", cercania:3, distancia:10 , active:false, nombre:'Donas la pasadita', description:'Aqui va una descripcion del lugar'},
    {id:9 ,plan:"pagado", cercania:3, distancia:10 , active:true, nombre:'Veterinaria Huellitas feliz', description:'Aqui va una descripcion del lugar'}
  ];

  id=null;
  lugar:any={}
  constructor(private route: ActivatedRoute, private lugaresService: LugaresService){
    console.log(this.route.snapshot.params['id'])
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id']
    this.lugar = this.lugaresService.buscarLugar(this.id);
    
  }

  buscarLugar(){
    return this.lugares.filter((lugar) => {return lugar.id == this.id}) [0] || null;
  }
}
