import {Property} from './property.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class PropertyService {
  propertysChanged = new Subject<Property[]>();
  private propertys: Property [] = [
    new Property('Цвет авто', 'dropdown', 'nameColor'),
    new Property('Год выпуска', 'number', 'dateAdd'),
    new Property('Тип топлива', 'string', 'typeGas')
  ];

  getPropertys() {
    return this.propertys.slice();
  }

  addProperty(property: Property) {
    this.propertys.push(property);
  }

  deleteProperty(id: number) {
    this.propertys.splice(id, 1);
    this.propertysChanged.next(this.propertys.slice());
  }
}
