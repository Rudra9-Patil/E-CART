import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlPoint = 'https://ty-shop.herokuapp.com';
  constructor(private http: HttpClient,) { }
  // loginVal:boolean=false
  addProduct(product: product) {
    return this.http.post<{
      error: boolean,
      message: string,
      product: product
    }>(`${this.urlPoint}/api/products`, product)
  }

  getProduct() {

    return this.http.get<{
      error: boolean,
      message: string,
      products: product[]
    }>(`${this.urlPoint}/api/products`)
  }
  deleteProduct(id: any) {
    return this.http.delete(`${this.urlPoint}/api/products/${id}`)
  }
  updateProduct(product: any, id: any) {
    return this.http.put<{
      error: boolean,
      message: string,
      responce: product[]
    }>(`${this.urlPoint}/api/products/${id}`, product)
  }


}
