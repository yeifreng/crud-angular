import { Component } from '@angular/core';
import { Empleado } from '../empleados';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-formulario-empleados',
  templateUrl: './formulario-empleados.component.html',
  styleUrls: ['./formulario-empleados.component.css']
})
export class FormularioEmpleadosComponent {

  constructor(private crudService:CrudServiceService){

  }
  
  titulo:string = 'Agregar empleado';

  //formulario es el componente padre
    idEmpleado:string;
    nombreEmpleado:string;
    apellidoEmpleado:string;
    cargoEmpleado:string;
    salarioEmpleado:number;
  
    agregarEmpleado(){
      let miEmpleado = new Empleado(this.idEmpleado,this.nombreEmpleado, this.apellidoEmpleado, this.cargoEmpleado, this.salarioEmpleado);
      //this.empleados.push(miEmpleado);
      console.log(miEmpleado);
      this.crudService.agregarEmpleado(miEmpleado).subscribe();
    }

}
