import { Component } from '@angular/core';
import { Empleado } from '../empleados';
import { CrudServiceService } from '../crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-empleados',
  templateUrl: './formulario-empleados.component.html',
  styleUrls: ['./formulario-empleados.component.css']
})
export class FormularioEmpleadosComponent {

  constructor(private crudService:CrudServiceService, private router:Router){

  }
  
  titulo:string = 'Agregar empleado';

  //formulario es el componente padre
    nombreEmpleado:string;
    apellidoEmpleado:string;
    cargoEmpleado:string;
    salarioEmpleado:number;
  
    agregarEmpleado(){
      let miEmpleado = new Empleado(this.nombreEmpleado, this.apellidoEmpleado, this.cargoEmpleado, this.salarioEmpleado);
      this.crudService.agregarEmpleado(miEmpleado).subscribe(respuesta=>{
        this.router.navigate(['empleados']);
      });
      
    }

}
