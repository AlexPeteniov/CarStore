import { Property } from '../../shared/property.model';
import { Injectable } from '@angular/core';


@Injectable()
export class PropertyService {
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
  }
  deleteProperty(id: number) {
    this.propertys.splice(id, 1);
  }
}
