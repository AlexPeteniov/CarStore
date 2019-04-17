import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import {FormArray, FormBuilder, FormGroup,} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import { Property } from '../../propertyModule/property.model';
import { PropertyService } from '../../propertyModule/property.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  @Input() index: number;
  @Input() pForm: FormGroup;
  props: FormArray;
  condition: boolean;



  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  alowedProps: Property[] = this.propertyService.getPropertys();

  ngOnInit() {
    this.condition = true;
    this.pForm = this.fb.group({
      name: [''],
      price: [''],
      image: [''],
      textarea: [''],
      props: this.fb.array([this.createProp('Цвет авто')]),
    });
    this.pForm.valueChanges.subscribe(newVal => console.log(newVal));
  }

  createProp(val): FormGroup {
    return this.fb.group({
      value: '',
      name: val || '',
    });
  }

  onSubmit(form: FormGroup = this.pForm) {
    const value = form.value;
    const newProduct = new Product(
      value.name,
      value.price,
      value.image,
      value.textarea,
      value.props
    );
    this.productService.addProduct(newProduct);
    this.toastr.success('Продукт добавлено успешно!', 'Toastr message!', {
      positionClass: 'toast-top-center',
    });
  }

  onAddProps() {
    this.props = this.pForm.get('props') as FormArray;
    this.props.push(this.createProp(''));
  }

  onDeleteProps(index: number) {
    (<FormArray>this.pForm.get('props')).removeAt(index);
    this.pForm.removeControl('select');
  }
  onBack(){
    this.router.navigate(['/products']);
  }
}
