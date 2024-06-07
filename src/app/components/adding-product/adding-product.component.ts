import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../../models/product';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adding-product',
  standalone: true,
  imports: [NgOptimizedImage,FormsModule,HeaderComponent],
  providers:[ProductService],
  templateUrl: './adding-product.component.html',
  styleUrl: './adding-product.component.scss'
})
export class AddingProductComponent {

product:Product=new Product()
constructor(private productService:ProductService,private toastr: ToastrService,public router:Router){}
  addingProduct(){
    this.productService.addingProduct(this.product)
    .subscribe(
      (result)=>{
      this.showSuccess()
    },
    (err)=>{
      this.showError()
    }
  )
    this.router.navigate(['/home'])
}
  showSuccess() {
    this.toastr.success(`Adicionado com sucesso.`);
  }
  showError(){
    this.toastr.error("Não foi possivel adicionar a quantidade")
  }

}
