import { Component, OnInit} from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  pForm: FormGroup;
  constructor(
    private productService: ProductService,
    private toastr: ToastrService) {}

  ngOnInit() {
    this.pForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      dateAdd: new FormControl('', Validators.required)});
  }
  onSubmit(form: FormGroup = this.pForm) {
    const value = form.value;
    const newProduct = new Product(value.name, value.price, value.dateAdd);
    this.productService.addProduct(newProduct);
    this.toastr.success('Продукт добавлено успешно!', 'Toastr message!', {positionClass: 'toast-top-center'});
  }
  }
