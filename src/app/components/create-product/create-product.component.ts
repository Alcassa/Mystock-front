import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { ToastrService } from 'ngx-toastr';

import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule,CommonModule,HeaderComponent,NgOptimizedImage],
  providers:[ProductService],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
   product:Product=new Product();

  constructor(private productService:ProductService,private toastr: ToastrService,public router:Router) {}

  registerProduct(){
    this.product.quantity=0
    this.productService.registerProduct(this.product)
    .subscribe((result)=>{
      this.showSuccess(this.product.name==undefined ? '' : this.product.name)
    },
  (err)=>{
    this.showError()
  })
    this.router.navigate(['/home '])
  }
  showSuccess(message:string) {
    this.toastr.success(`${message} cadastrado com sucesso.`);
  }
  showError(){
    this.toastr.error("Não foi possivel cadastrar")
  }
}
