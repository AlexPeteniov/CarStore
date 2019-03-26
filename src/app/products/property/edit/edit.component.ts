import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Property } from '../../../shared/property.model';
import { PropertyService } from '../property.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  constructor(private propertyService: PropertyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
  const value = form.value;
  const newProperty = new Property(value.name, value.type);
  this.propertyService.addProperty(newProperty);
}
}
