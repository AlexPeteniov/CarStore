import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  @ViewChild('f') pForm: NgForm;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newProduct = new Product(value.name, value.price, value.dateAdd);
    this.productService.addProduct(newProduct);
    this.toastr.success('Продукт добавлен успешно!', 'Toastr message!', {positionClass: 'toast-top-center'});
  }
}

