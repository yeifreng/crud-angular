import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioEmpleadosComponent } from './formulario-empleados/formulario-empleados.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';
import { EditarComponent } from './editar/editar.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FormularioEmpleadosComponent,
    ListaEmpleadosComponent,
    MenuPrincipalComponent,
    ErrorComponent,
    InicioComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
