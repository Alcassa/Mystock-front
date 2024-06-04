import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  standalone: true,
  imports: [HeaderComponent,ProductListComponent,ViewProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
