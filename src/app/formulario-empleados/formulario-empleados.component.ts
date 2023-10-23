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
  
    guardarEmpleado(){
      let miEmpleado = new Empleado(this.nombreEmpleado, this.apellidoEmpleado, this.cargoEmpleado, this.salarioEmpleado);
      //this.empleados.push(miEmpleado);
      console.log(miEmpleado);
    }

}
