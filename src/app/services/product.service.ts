import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { Movement } from '../models/movement';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api:string='http://localhost:8080/api'
  _product:Product=new Product()
  constructor(private http:HttpClient) {}

  getProducts(){
    return this.http.get<Product[]>(this.api+'/products')
  }
  registerProduct(product:Product){
    console.log(product)
    return this.http.post<Product>(this.api+'/products',product)
  }
  addingProduct(product:Product){
    console.log(product)
    return this.http.put<Product>(this.api+'/products/add',product) 
  }

  withDrawProduct(product:Product){
    console.log(product)
    return this.http.put<Product>(this.api+'/products/withdraw',product) 
  } 

  reportProduct(){
    return this.http.get<Movement[]>(this.api+'/movement') 
  }
}
