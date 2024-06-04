import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router:Router){}
  navigateToHome(){
    this.router.navigate(['/home'])
  }
  navigateToStock(){
    this.router.navigate(['/home/saldo'])
  }
  navigateToRegister(){
    this.router.navigate(['/home/cadastro'])
  }
  navigateToAddingProduct(){
    this.router.navigate(['home/adicionar'])
  }
  navigateToWithDrawProduct(){
    this.router.navigate(['home/retirar'])
  }
  navigateToReport(){
    this.router.navigate(['home/relatorio'])
  }
}
