import { Component, OnInit } from '@angular/core';

export interface usuario{
  id:number,
  nombre:string,
  apellido:string,
  compania:string,
  rol:string,
  fechaAlta:Date
};

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:usuario[]=[{
    id:1002,
    nombre: "Adrian",
    apellido: "Ruvalcaba Garcia",
    compania: "Neoris One",
    rol: "SuperUser",
    fechaAlta: new Date(1990,4,20)
  },{
    id:1002,
    nombre: "Maricela",
    apellido: "Ramirez",
    compania: "NA",
    rol: "Admin",
    fechaAlta: new Date(1995,1,11)
  },{
    id:1002,
    nombre: "Juan Jose",
    apellido: "Ruvalcaba Ramirez",
    compania: "NA",
    rol: "User",
    fechaAlta: new Date(2017,6,5)
  },{
    id:1002,
    nombre: "Luz Natalia",
    apellido: "Ruvalcaba Ramirez",
    compania: "Neoris One",
    rol: "User",
    fechaAlta: new Date(2019,4,10)
  },{
    id:1002,
    nombre: "Fer",
    apellido: "Garza Montalvo",
    compania: "eTrainers",
    rol: "SuperUser",
    fechaAlta: new Date(1980,8,25)
  },]

  constructor() { }

  ngOnInit() {
  }

}
