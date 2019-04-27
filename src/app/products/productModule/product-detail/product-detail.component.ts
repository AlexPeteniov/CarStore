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
  pname: string;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.pname = this.route.snapshot.params['product.name'];
    console.log(this.pname);
    this.product = this.productService.getProductByName(this.pname);
  }

  onSubmit() {
    this.toastr.success('Поздравляем с покупкой!!!', 'Toastr message!', {positionClass: 'toast-top-center'});
  }
}
