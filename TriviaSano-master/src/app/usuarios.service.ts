import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'
import {Observable, retry} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private servicio:HttpClient) { }

  //conectar el front-end con backend

  usuariosUrl= 'http://127.0.0.1:3000/usuarios/';

  //tomar toda la data

  getAllData():Observable<any>{
    return this.servicio.get(`${this.usuariosUrl}`);
  }

  createData(data:any):Observable<any>{

    console.log(data,'createapi=>')
    return this.servicio.post(`${this.usuariosUrl}`,data);
  }













  /*//METODO PARA ACCEDER A LA BASE DE DATOS, SOLO TABLA "usuarios"
  ConsultarUsuarios():Observable<any> {
    return this.servicio.get(environment.servidor + "/usuarios/:correo");
  }*/
}
