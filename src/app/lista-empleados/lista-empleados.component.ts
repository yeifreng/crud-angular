import { Component} from '@angular/core';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  empleados:any;
  titulo:string = 'Empleados';

  constructor(private crudService:CrudServiceService){

    this.crudService.obtenerEmpleado().subscribe(respuesta=>{
      this.empleados = respuesta;
    });
    
  }

  eliminarEmpleado(id:any, indice:any){
    
    if(window.confirm('Desea eliminar el empleado?')){
      this.crudService.eliminarEmpleado(id).subscribe((respuesta)=>{
        this.empleados.splice(indice,1);
      });
    }
  }



}
