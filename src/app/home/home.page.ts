import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  listUsuario:any;
  constructor(private usuarioService:UsuarioService) {}


  getAllUser(){
    this.usuarioService.getUser().subscribe(data=>{
        console.log("lista de usuario", data);
        this.listUsuario= data["users"];
       })
  }

  ngOnInit(){
    this.getAllUser();
  }
}
