import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Property} from '../property.model';
import {PropertyService} from '../property.service';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;

  constructor(private propertyService: PropertyService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newProperty = new Property(value.name, value.type);
    this.propertyService.addProperty(newProperty);
    this.toastr.success('Проперти добавлено успешно!', 'Toastr message!', {positionClass: 'toast-top-center'});
  }
}
