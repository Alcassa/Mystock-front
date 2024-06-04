import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [NgOptimizedImage,CommonModule,HeaderComponent],
  providers:[ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  _products:Product[]=[];

  constructor(private productService:ProductService){
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
    .subscribe({next:products=> this._products=products})
  }

}
