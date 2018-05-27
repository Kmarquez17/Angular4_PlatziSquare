import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' 

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-click.directive';

//Importacion de la libreria route
import {Routes, RouterModule} from '@angular/router';

import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';


//se crea  un objeto con todas las rutas que estaran disponible en el proytecto con su compenete a renderizar.
const appRoutes: Routes = [
  {path:'',component: LugaresComponent},
  {path:'lugares',component: LugaresComponent},
  {path:'detalle/:id',component: DetalleComponent},
  {path:'contacto',component: ContactoComponent},
  {path:'crear',component: CrearComponent}
]
export const firebaseConfig = {
    apiKey: "AIzaSyBtDJggFFi8umHAhpRU8bBHfItJBheyQLg",
    authDomain: "platzisquare-bb765.firebaseapp.com",
    databaseURL: "https://platzisquare-bb765.firebaseio.com",
    // projectId: "platzisquare-bb765",
    storageBucket: "platzisquare-bb765.appspot.com",
    messagingSenderId: "819524618613"
};


//Se manda a llamar a los componentes para cargar los componentes necesarios del proyecto.
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    LugaresComponent,
    DetalleComponent,
    ContactoComponent,
    CrearComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhgEOw1YxT_l5pgehEE8Q_sfI324exO8k'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
