import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import {RegistroComponent} from './pages/registro/registro.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path:'login',
    loadChildren: () => import('./pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m=>m.RegistroModule)
  },
  {
    path: 'usuario',
    component:RegistroComponent
  },
  {path:'read',component:ReadComponent},
  {path:'formulario',component:FormularioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
