import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators } from '@angular/forms';

import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  
  constructor(private service:UsuariosService) { }



  ngOnInit(): void {
  }
  
  formulario = new FormGroup({
    'nombre': new FormControl('',Validators.required),
      'edad': new FormControl('',Validators.required),
      'correo': new FormControl('',[Validators.required,Validators.email]),
      'fechaNacimiento': new FormControl('',Validators.required),
      'sexo': new FormControl('',Validators.required),
      'estatura': new FormControl('',Validators.required),
      /*'peso': new FormControl('',Validators.required),
      'enfermedadCardiaca': new FormControl('',Validators.required),
      'enfermedadRespiratoria': new FormControl('',Validators.required),
      'cirugia':new FormControl('',Validators.required),
      'alergia': new FormControl('',Validators.required),
      'enfermedadDegenerativa': new FormControl('',Validators.required),
      'futbol': new FormControl('',Validators.required),
      'baloncesto': new FormControl('',Validators.required),
      'voleibol': new FormControl('',Validators.required),
      'salsa': new FormControl('',Validators.required),
      'zumba': new FormControl('',Validators.required),
      'folklor': new FormControl('',Validators.required)*/
  });

  userSubmit(){
    if(this.formulario.valid){
      console.log(this.formulario.value)
      this.service.createData(this.formulario.value).subscribe((res)=>{
        console.log(res, 'res=>');

      })
    }else{
      console.log('todos los campos son requeridos')
    }
  }

  /*,
      */
}
