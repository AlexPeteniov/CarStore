import {Component, OnInit,} from '@angular/core';
import {Property} from '../property.model';
import {PropertyService} from '../property.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  propForm: FormGroup;

  constructor(private propertyService: PropertyService,
              private toastr: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.propForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
  }

  onSubmit(form: FormGroup = this.propForm) {
    const value = form.value;
    const newProperty = new Property(
      value.name, value.type, value.id, this.propertyService.getNextI());
    this.propertyService.addProperty(newProperty);
    this.toastr.success('Проперти добавлено успешно!', 'Toastr message!', {positionClass: 'toast-top-center'});
    this.router.navigate(['/property']);
  }

  onBack() {
    this.router.navigate(['/property']);
  }
}
