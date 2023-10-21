import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { AppComponent } from './app.component';
import { FormularioEmpleadosComponent } from './formulario-empleados/formulario-empleados.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'agregar', component:FormularioEmpleadosComponent},
  {path:'empleados', component:ListaEmpleadosComponent},
  {path:'**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
