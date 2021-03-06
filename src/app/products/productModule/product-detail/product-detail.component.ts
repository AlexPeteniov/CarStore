import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  product: Product;
  index: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.index = Number(this.route.snapshot.params['id']);
    this.product = this.productService.getProductById(this.index);
  }

  onSubmit() {
    this.toastr.success('Поздравляем с покупкой!!!', 'Toastr message!', {positionClass: 'toast-top-center'});
  }
}
