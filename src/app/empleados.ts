export class Empleado{
    id:string;
    nombre:string;
    apellido:string;
    cargo:string;
    salario:number;

    constructor(id:string, nombre:string, apellido:string, cargo:string, salario:number){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;
    }
}