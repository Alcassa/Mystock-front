import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Movement } from '../../models/movement';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  providers:[ProductService],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
  movement:Movement[]=[];


  constructor(private productService:ProductService) {
    this.teste()
  }
  teste(){
    this.productService.reportProduct()
    .subscribe({next:products=> this.movement=products})
    console.log(this.movement)
  }
}
