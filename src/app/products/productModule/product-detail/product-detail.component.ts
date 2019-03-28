import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
       this.id = this.route.snapshot.params['id'];
       this.product = this.productService.getProduct(this.id);
  }
}