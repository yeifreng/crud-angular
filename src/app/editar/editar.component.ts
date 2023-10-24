import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudServiceService } from '../crud-service.service';
import { Empleado } from '../empleados';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  titulo:string = 'Editar empleado';
  idEmpleado:any;
  nombreEmpleadoEditar:string;
    apellidoEmpleadoEditar:string;
    cargoEmpleadoEditar:string;
    salarioEmpleadoEditar:number;

  constructor(private router:Router, private activeRoute:ActivatedRoute, private crudService:CrudServiceService){
    //con esto recepcionamos el id que viene de la ruta y lo guardamos en una variable
    this.idEmpleado = this.activeRoute.snapshot.paramMap.get('id');
    this.crudService.traerEmpleado(this.idEmpleado).subscribe(respuesta=>{
      this.nombreEmpleadoEditar=respuesta[0]['nombre'];
      this.apellidoEmpleadoEditar=respuesta[0]['apellido'];
      this.cargoEmpleadoEditar=respuesta[0]['cargo'];
      this.salarioEmpleadoEditar=respuesta[0]['salario'];
    })
  }


  editarEmpleado():any{
    let empleadoActualizar = new Empleado(this.nombreEmpleadoEditar, this.apellidoEmpleadoEditar, this.cargoEmpleadoEditar, this.salarioEmpleadoEditar);
    this.crudService.actualizarEmpleado(this.idEmpleado,empleadoActualizar).subscribe(()=>{
      this.router.navigate(['empleados']);
    });
    
  }
}
