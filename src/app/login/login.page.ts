import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password:string;
  constructor(private usuarioService:UsuarioService,
              private router:Router,
              public toastController: ToastController) { }

  ngOnInit() {
  }

  login(){

    this.usuarioService.loginUser(this.email,this.password)
    .subscribe( data => {
      console.log("login",data["access_token"]);
      localStorage.setItem('token',data["access_token"]);
      this.mensajeLogin("Logueado correctamente");
      this.router.navigate(["home"]);

     // this.router.navigate(['/heroes', { id: heroId }]);
    }, error=>{
      this.mensajeLogin("usuarios incorrectos");
     
    })
  }
  async mensajeLogin(msj:string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000
    });
    toast.present();
  }

}
