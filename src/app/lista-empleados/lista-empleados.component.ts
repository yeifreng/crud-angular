import { Component, Input } from '@angular/core';
import { Empleado } from '../empleados';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

//listado es el componente hijo

  titulo:string = 'Listado de empleados';

  //estamos recibiendo desde el template, la informacion del componente padre y guardamos eso
  //en una variable para usarlo en el componente hijo
  @Input() empleado:Empleado;

}
