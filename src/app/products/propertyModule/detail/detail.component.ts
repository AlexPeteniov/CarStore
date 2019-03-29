import {Component, OnInit, Input} from '@angular/core';
import {Property} from '../property.model';
import {PropertyService} from '../property.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() property: Property;
  @Input() index: number;

  constructor(private propertyService: PropertyService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onDelete() {
    this.propertyService.deleteProperty(this.index);
  }
}
