import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { TerrainComponent } from './terrain/terrain.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { SocieteArchitecComponent } from './societe-architec/societe-architec.component';
import { SocieteMatComponent } from './societe-mat/societe-mat.component';
import { CamionComponent } from './camion/camion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    TerrainComponent,
    UtilisateursComponent,
    SocieteArchitecComponent,
    SocieteMatComponent,
    CamionComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
