import { Injectable } from '@angular/core';
import { Product } from './product.model';




@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product('corvette zr1', '500 000 $', '01.11.18'),
    new Product('mersedes zr1', '500 000 $', '01.11.18')
  ];
  getProducts() {
    return this.products.slice();
  }
  getProduct(index: number) {
    return this.products[index];
  }
  addProduct(product: Product ) {
    this.products.push(product);
  }
  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}