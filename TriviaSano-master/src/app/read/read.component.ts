import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private service:UsuariosService) { }

  readData:any;
  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>")
      this.readData= res.data;
    });
  }

}
