import { Component } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  titulo:string = 'Editar empleado';

  nombreEmpleadoEditar:string;
  apellidoEmpleadoEditar:string;
  cargoEmpleadoEditar:string;
  salarioEmpleadoEditar:number;

  editarEmpleado(){

  }
}
