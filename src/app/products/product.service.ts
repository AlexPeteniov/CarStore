import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ProductService {
  productsChanged = new Subject<Product[]>();

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
    this.productsChanged.next(this.products.slice());
  }
  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.productsChanged.next(this.products.slice());
  }
}
