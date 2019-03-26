import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {PropertyService} from './property.service';
import { Property} from '../../shared/property.model';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  propertys: Property[];
  constructor(private propertyService: PropertyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.propertys = this.propertyService.getPropertys();
    this.propertyService.propertysChanged
      .subscribe(
        (propertys: Property[]) => {
          this.propertys = propertys;
        }
      );
  }
}
