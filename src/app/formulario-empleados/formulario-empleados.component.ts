import { Component } from '@angular/core';
import { Empleado } from '../empleados';

@Component({
  selector: 'app-formulario-empleados',
  templateUrl: './formulario-empleados.component.html',
  styleUrls: ['./formulario-empleados.component.css']
})
export class FormularioEmpleadosComponent {
  
  titulo:string = 'Agregar empleado';

  //formulario es el componente padre
  
    nombreEmpleado:string;
    apellidoEmpleado:string;
    cargoEmpleado:string;
    salarioEmpleado:number;
  
    empleados:Empleado[] = [
      new Empleado("juan","perez","auxiliar", 1500000),
      new Empleado("ana","diaz","asesor",2500000),
      new Empleado("maria","paz","asesor",2500000),
      new Empleado("luis","daza","director",6500000)
      ];
  
    guardarEmpleado(){
      let miEmpleado = new Empleado(this.nombreEmpleado, this.apellidoEmpleado, this.cargoEmpleado, this.salarioEmpleado);
      this.empleados.push(miEmpleado);
    }

}
