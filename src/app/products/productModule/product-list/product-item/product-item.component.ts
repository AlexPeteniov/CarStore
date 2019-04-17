import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';
import {ProductService} from '../../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() id: number;
  @Input() index: number;
  @Input() pForm: FormGroup;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  onDeleteProduct() {
    this.productService.deleteProduct(this.index);
    this.toastr.warning('Продукт удален успешно!', 'Toastr message!', {positionClass: 'toast-top-center'});
  }
  productEdit() {
    this.product = this.productService.getProduct(this.index);
    this.pForm.setValue({
      name: this.product.name,
      price: this.product.price,
      image: this.product.image,
      textarea: this.product.textarea,
    });
    this.router.navigate(['/products/new']);
  }

}
