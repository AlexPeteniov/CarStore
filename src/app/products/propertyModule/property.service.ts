import {Property} from './property.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class PropertyService {
  propertysChanged = new Subject<Property[]>();
  private propertys: Property [] = [
    new Property('Цвет авто', 'dropdown'),
    new Property('Год выпуска', 'number'),
    new Property('Тип топлива', 'string')
  ];

  getPropertys() {
    return this.propertys.slice();
  }

  addProperty(property: Property) {
    this.propertys.push(property);
  }

  deleteProperty(index: number) {
    this.propertys.splice(index, 1);
    this.propertysChanged.next(this.propertys.slice());
  }
}
