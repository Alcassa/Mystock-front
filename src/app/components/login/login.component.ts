import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginService } from './login.service';
import { User } from './user';
import { ReportComponent } from '../report/report.component';


@Component({
  standalone: true,
  imports: [NgOptimizedImage,FormsModule],
  providers:[LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    user:User= new User();

    login:boolean=false;

    constructor(private loginService:LoginService){ }

  getLogin(){
    this.loginService.getLogin(this.user)
  }
}
