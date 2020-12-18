import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  registerUser(){
    const data={'name':'Barbarita', 'email':'barbarita@espam.edu.ec', 'password':'123456', 'password_confirmation':'123456'}
    return  this.http.post('http://127.0.0.1:8000/api/auth/register',data);
  }

  loginUser(email:string, password:string){
   const data={'email':email, 'password':password}
    return  this.http.post('http://127.0.0.1:8000/api/auth/login',data);
  }
  getUser(){
    var headerRequest= new HttpHeaders(
      {'Content-Type':'application/json',
       'Authorization':'Bearer '+ localStorage.getItem('token')
      }
    )
    return  this.http.get('http://127.0.0.1:8000/api/auth/user',{headers:headerRequest});
  }

}
