import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    
  }

  registrase(){
    debugger
    this.usuarioService.registerUser()
    .subscribe( data=>{
      debugger
        console.log(data);
     })
  }

}
