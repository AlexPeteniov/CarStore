import { Component, OnInit, Input} from '@angular/core';
import { Product } from '../../product.model';
import {ProductService} from '../../product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;
  products: Product[] = [];
  constructor( private productService: ProductService) { }
  ngOnInit() {
          this.product = this.productService.getProduct(this.index);
          }
  onDeleteProduct() {
    this.productService.deleteProduct(this.index);
  }

}
