import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioEmpleadosComponent } from './formulario-empleados/formulario-empleados.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { FormsModule } from '@angular/forms';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioEmpleadosComponent,
    ListaEmpleadosComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
