import {Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {PropertyService} from './property.service';
import { Property} from './property.model';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit, OnDestroy {
  propertys: Property[];
  private subscription: Subscription;
  constructor(private propertyService: PropertyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.propertyService.propertysChanged
      .subscribe(
        (propertys: Property[]) => {
          this.propertys = propertys;
        }
      );
    this.propertys = this.propertyService.getPropertys();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
