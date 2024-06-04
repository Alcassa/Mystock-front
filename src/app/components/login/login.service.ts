import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  user:User=new User()
  private auth:boolean=false;

  constructor(private router:Router) { }
  getLogin(user:User){
    if(user.name=="alcassa" && user.password=="123"){
      this.auth=true;
      this.router.navigate(['/home'])
    }else{
      window.alert('acesso negado')
    }
  }
}
