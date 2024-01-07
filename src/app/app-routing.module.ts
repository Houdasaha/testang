import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { TerrainComponent } from './terrain/terrain.component';
import { CamionComponent } from './camion/camion.component';
import { SocieteMatComponent } from './societe-mat/societe-mat.component';


const routes: Routes = [
  
  { path: 'employe', component: EmployeComponent },
  { path: 'terrain', component: TerrainComponent },
  { path: 'camion', component: CamionComponent },
  { path:'societe-mat', component: SocieteMatComponent},
  // Ajoutez d'autres routes au besoin
  { path: '', redirectTo: '/page1', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
