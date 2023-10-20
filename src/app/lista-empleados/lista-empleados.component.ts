import { Component } from '@angular/core';
import { Empleado } from '../empleados';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  titulo:string = 'Listado de empleados';

  empleados:Empleado[] = [
    new Empleado("juan","perez","auxiliar", 1500000),
    new Empleado("ana","diaz","asesor",2500000),
    new Empleado("maria","paz","asesor",2500000),
    new Empleado("luis","daza","director",6500000)
    ];

}
