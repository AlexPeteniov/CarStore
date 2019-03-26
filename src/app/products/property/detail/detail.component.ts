import { Component, OnInit, Input} from '@angular/core';
import { Property } from '../../../shared/property.model';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() property: Property;
  @Input() id: number;

  constructor( private propertyService: PropertyService) { }
  ngOnInit() {
  }
  onDelete() {
      this.propertyService.deleteProperty(this.id);
    }
}
