import { Injectable } from "@angular/core";

@Injectable()

export class LugaresService{
    lugares:any = [
        {id:1 ,plan:"pagado", cercania:1, distancia:1.8 , active:false, nombre:'Donas la pasadita'},
        {id:2 ,plan:"gratuito", cercania:1, distancia:1 , active:true, nombre:'Floreria la gardenia'},
        {id:3 ,plan:"pagado", cercania:2, distancia:5 , active:true, nombre:'Veterinaria Huellitas feliz'},
        {id:4 ,plan:"gratuito", cercania:2, distancia:10 , active:true, nombre:'Floreria la gardenia'},
        {id:5 ,plan:"pagado", cercania:3, distancia:35, active:false, nombre:'Donas la pasadita'},
        {id:6 ,plan:"gratuito", cercania:3, distancia:120 , active:true, nombre:'Veterinaria Huellitas feliz'},
        {id:7 ,plan:"pagado", cercania:3, distancia:10 , active:true, nombre:'Floreria la gardenia'},
        {id:8 ,plan:"gratuito", cercania:3, distancia:10 , active:false, nombre:'Donas la pasadita'},
        {id:9 ,plan:"pagado", cercania:3, distancia:10 , active:true, nombre:'Veterinaria Huellitas feliz'}
      ];


      public getLugares(){
          return this.lugares;
      }

      public buscarLugar(id){
        return this.lugares.filter((lugar) => {return lugar.id == id}) [0] || null;
      }
}