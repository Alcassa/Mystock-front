import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { HeaderComponent } from '../header/header.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-with-draw-product',
  standalone: true,
  imports: [NgOptimizedImage,FormsModule,HeaderComponent],
  providers:[ProductService],
  templateUrl: './with-draw-product.component.html',
  styleUrl: './with-draw-product.component.scss'
})
export class WithDrawProductComponent {

  product:Product=new Product()
  constructor(private productService:ProductService,private toastr: ToastrService,public router:Router){}
  
  
  withDrawProduct(){
    this.productService.withDrawProduct(this.product)
    .subscribe(result=>this.showSuccess())
  }
  showSuccess() {
    this.toastr.success(`Retirado com sucesso.`);
  }
}
