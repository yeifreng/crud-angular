import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { AppComponent } from './app.component';
import { FormularioEmpleadosComponent } from './formulario-empleados/formulario-empleados.component';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'inicio'},
  {path:'inicio', component:InicioComponent},
  {path:'agregar', component:FormularioEmpleadosComponent},
  {path:'empleados', component:ListaEmpleadosComponent},
  {path:'editar/:id', component:EditarComponent},
  {path:'**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
