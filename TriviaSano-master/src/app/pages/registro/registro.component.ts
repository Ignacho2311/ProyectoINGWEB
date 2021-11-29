import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../usuarios.service'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  show:number=1;
  formulario:FormGroup;

  constructor(public Form:FormBuilder) {
    this.formulario=Form.group({
      nombre:["",Validators.required]
      /*edad:["",Validators.required],
      correo:["",Validators.required],
      fechaNacimiento:["",Validators.required],
      sexo:["",Validators.required],*/
    })
   }

  ngOnInit(): void {
  }

    

    /*
     'nombre': new FormControl('',Validators.required),
      'edad': new FormControl('',Validators.required),
      'correo': new FormControl('',Validators.required),
      'fechaNacimiento': new FormControl('',Validators.required),
      'sexo': new FormControl('',Validators.required)
      'estatura': new FormControl('',Validators.required),
      'peso': new FormControl('',Validators.required),
      'enfermedadCardiaca': new FormControl('',Validators.required),
      'enfermedadRespiratoria': new FormControl('',Validators.required),
      'alergia': new FormControl('',Validators.required),
      'enfermedadDegenerativa': new FormControl('',Validators.required),
      'futbol': new FormControl('',Validators.required),
      'baloncesto': new FormControl('',Validators.required),
      'voleibol': new FormControl('',Validators.required),
      'salsa': new FormControl('',Validators.required),
      'zumba': new FormControl('',Validators.required),
      'folklor': new FormControl('',Validators.required) */

  /*
   //EL .subscribe ES PARA MIRAR LO QUE SE ESTA CAMBIANDO, EN ESTE CASO "datos" SERÁ LA VARIABLE QUE SEA OBSERVADOR
    this.ServicioUsuario.ConsultarUsuarios().subscribe(datos=>{
      console.log(datos);
    }) */
  showModal(){
    
  }
}
