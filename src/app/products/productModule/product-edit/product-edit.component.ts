import { Component, OnInit} from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  productService: ProductService;
  pForm: FormGroup;
  constructor() {}
  ngOnInit() {
    this.pForm = new FormGroup({
      name: new FormControl('', Validators.required),
      userEmail: new FormControl('', Validators.required),
      userPhone: new FormControl('', Validators.required)});
  }
  onSubmit(form: FormGroup) {
    const value = form.value;
    const newProduct = new Product(value.name, value.price, value.dateAdd);
    this.productService.addProduct(newProduct);
  }}
