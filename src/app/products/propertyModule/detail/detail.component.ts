import { Component, OnInit, Input} from '@angular/core';
import { Property } from '../property.model';
import { PropertyService } from '../property.service';
import { ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() property: Property;
  @Input() index: number;

  constructor( private propertyService: PropertyService,
               private route: ActivatedRoute,
               private toastr: ToastrService
              ) {}
  ngOnInit() {
  }
  onDelete() {
      this.propertyService.deleteProperty(this.index);
      this.toastr.warning('Проперти удалено успешно!', 'Toastr message!', {positionClass: 'toast-top-center'});
    }
}
