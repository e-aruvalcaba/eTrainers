import { Component, OnInit } from '@angular/core';
// import { IUsuario } from 'src/app/modelos/usuario.model';
// import { ComunicacionService } from 'src/app/servicios/comunicacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  Usuario:string = "Usuario de eLearners";

  // constructor(private _comm:ComunicacionService) { }
  /**
   *
   */
  constructor() {
    // super();
    
  }
  ngOnInit() {
  }
  // nombre:string;
  // apellido:string;
  // date:Date;

  // usuario:IUsuario = {
  //   nombre: "",
  //   apellido: "",
  //   fechaAlta: ""
  // };
  // crearUsuario(){

  //   let dt = new Date();
  //   dt.getDate();

  //   this.usuario.nombre = this.nombre;
  //   this.usuario.apellido = this.apellido;
  //   this.usuario.fechaAlta = dt.toDateString();

  //   console.log(this.usuario);

  //   try {
  //     // this._comm.getAll();
  //     this._comm.insertarUsuario(this.usuario);
  //   } catch (error) {
  //     console.error("Error tratando de insertar usuario desde la funcion: 'Crear usuario'. Error: "+error);
  //   }
  // }

}
