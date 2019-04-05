import { Component, OnInit} from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  pForm: FormGroup;
  kForm: FormGroup;
  condition: boolean;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private toastr: ToastrService) {}

  ngOnInit() {
    this.condition = true;
    this.kForm = this.fb.group({select: ['']}),
    this.pForm = this.fb.group({
      name: [''],
      price: [''],
      image: [''],
      textarea: [''],
      typeGas: [''],
      nameColor: [''],
      dateAdd: ['',  Validators.pattern(/^[1-9]+[0-9]*$/)],
      props: new FormArray([])});
    this.pForm.valueChanges.subscribe(newVal => console.log());
  }
  onSubmit(form: FormGroup = this.pForm) {
    const value = form.value;
    const newProduct = new Product(value.name,
      value.price, value.dateAdd, value.image, value.textarea, value.nameColor, value.gasType );
    this.productService.addProduct(newProduct);
    this.toastr.success('Продукт добавлено успешно!', 'Toastr message!', {positionClass: 'toast-top-center'});
  }
  onAddProps() {
    const control = new FormControl(null, Validators.required);
    (<FormArray> this.pForm.get('props')).push(control);
  }
  onDeleteProps(index: number) {
    (<FormArray> this.pForm.get('props')).removeAt(index);
    this.pForm.removeControl('select');
  }

}
