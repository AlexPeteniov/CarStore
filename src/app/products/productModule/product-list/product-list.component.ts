import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {Subscription} from 'rxjs/Subscription';
import {OrderPipe} from 'ngx-order-pipe';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() product;
  products: Product[] = [];
  sortedProducts: Product[] = [];
  order = 'product.name';
  reverse = false;
  private subscription: Subscription;
  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private orderPipe: OrderPipe) {
    this.products = this.productService.getProducts();
    this.sortedProducts = orderPipe.transform(this.products, 'product.name');
  }

  ngOnInit() {
    this.subscription = this.productService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.sortedProducts = products;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
