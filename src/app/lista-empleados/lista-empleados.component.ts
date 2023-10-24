import { Component, Input } from '@angular/core';
import { Empleado } from '../empleados';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  constructor(private crudService:CrudServiceService){

    this.crudService.obtenerEmpleado().subscribe(respuesta=>{
      console.log(respuesta)
      this.empleados = respuesta;
    });
    
  }

  empleados:any;

//listado es el componente hijo

titulo:string = 'Empleados';
//estamos recibiendo desde el template, la informacion del componente padre y guardamos eso
//en una variable para usarlo en el componente hijo
@Input() empleado:Empleado;


}
