import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';
import {ProductService} from '../../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { FormGroup} from '@angular/forms';
import {OrderPipe} from 'ngx-order-pipe';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() id: number;
  @Input() index: number;
  @Input() name: string;
  @Input() product: Product;
  @Input() pForm: FormGroup;
  sortedCollection: any[];

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform
    (this.product, 'product.name');
    console.log(this.sortedCollection);
  }

  ngOnInit() {
  }

  onDeleteProduct() {
    this.productService.deleteProduct(this.productService.getProducts().indexOf(this.product));
    this.toastr.warning('Продукт удален успешно!', 'Toastr message!', {positionClass: 'toast-top-center'});
  }
  productEdit(product: Product, index) {
    this.productService.putProduct(product)
    this.router.navigate(['/products/new']);
  }

}
