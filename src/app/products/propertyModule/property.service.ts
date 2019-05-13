import {Property} from './property.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class PropertyService {
  propertysChanged = new Subject<Property[]>();
  private propertys: Property [] = [
    new Property('Цвет авто', 'dropdown', 'nameColor', 0),
    new Property('Год выпуска', 'number', 'dateAdd', 1),
    new Property('Тип топлива', 'string', 'typeGas', 2)
  ];

  getPropertys() {
    return this.propertys.slice();
  }

  getNextI() {
    return this.propertys.length;
  }

  addProperty(property: Property) {
    this.propertys.push(property);
  }

  deleteProperty(id: number) {
    this.propertys.splice(id, 1);
    this.propertysChanged.next(this.propertys.slice());
  }
}
