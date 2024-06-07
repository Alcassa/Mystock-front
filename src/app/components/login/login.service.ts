import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  user:User=new User()
  private auth:boolean=false;

  constructor(private router:Router, public toastr:ToastrService) { }
  getLogin(user:User){
    if(user.name=="alcassa" && user.password=="naruto24@"){
      this.auth=true;
      this.toastr.success(`Seja bem-vindo ${user.name}`)
      this.router.navigate(['/home'])
    }else{
      this.toastr.error("Usuário/senha incorretos")
    }
  }
}
