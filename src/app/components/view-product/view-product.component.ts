import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [HeaderComponent,ProductListComponent],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss'
})
export class ViewProductComponent {

}
