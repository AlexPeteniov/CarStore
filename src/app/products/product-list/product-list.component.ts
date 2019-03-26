import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Product} from '../product.model';
import {ProductService} from '../product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() product: Product;
  @Input() index: number;
  @ViewChild('f') pForm: NgForm;
  products: Product[] = [];

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.productService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
        );
    this.products = this.productService.getProducts();
  }
}
