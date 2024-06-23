import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NavbarGeneralComponent } from './componentes_global/navbar-general/navbar-general.component';
import { NavbarComponent } from './componentes_global/navbar/navbar.component';
import { convenioC } from './componentes/convenio/convenio.component';
const routes: Routes = [
  { path: '', redirectTo: '/sesion', pathMatch: 'full' },
  { path: 'sesion', component: NavbarComponent },
  { path: 'inicio', component: NavbarGeneralComponent },
  { path: 'convenio', component: convenioC }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

