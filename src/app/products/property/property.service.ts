import { Property } from '../../shared/property.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PropertyService {
  propertysChanged = new Subject<Property[]>();
  private propertys: Property [] = [
    new Property ('Цвет авто', 'dropdown'),
    new Property ('Год выпуска', 'number'),
    new Property ('Тип топлива', 'string'),
  ];
  getPropertys() {
    return this.propertys.slice();
  }
  getProperty(id: number) {
    return this.propertys[id];
  }

  addProperty(property: Property ) {
    this.propertys.push(property);
    this.propertysChanged.next(this.propertys.slice());
  }
  deleteProperty(id: number) {
    this.propertys.splice(id, 1);
    this.propertysChanged.next(this.propertys.slice());
  }
}
