import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {PropertyService} from './property.service';
import {Property} from './property.model';
import {Subscription} from 'rxjs/Subscription';
import {OrderPipe} from 'ngx-order-pipe';



@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit, OnDestroy {
  order = 'property.name';
  reverse = false;
  propertys: Property[] = [];
  sortedPropertys: Property[] = [];
  private subscription: Subscription;
  constructor(private propertyService: PropertyService,
              private router: Router,
              private route: ActivatedRoute,
              private orderPipe: OrderPipe) {
    this.propertys = this.propertyService.getPropertys();
    this.sortedPropertys = orderPipe.transform(this.propertys, 'name');
  }

  ngOnInit() {
    this.subscription = this.propertyService.propertysChanged
      .subscribe(
        (propertys: Property[]) => {
          this.sortedPropertys = propertys;
        }
      );
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
