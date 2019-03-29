import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() index: number;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onDeleteProduct() {
    this.productService.deleteProduct(this.index);
  }

}
