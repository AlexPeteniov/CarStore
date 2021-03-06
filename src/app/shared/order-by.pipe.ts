
import { Pipe, PipeTransform, Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[orderBy]',
  exportAs: 'orderBy'
})
@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
@HostListener('click', ['$event'])

  transform(value: Array<any>, field: string): any {
    if (value == null || value.length <= 1) {
      return value;
    }
    if (field.startsWith('-')) {
      field = field.substring(1);
      if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
        return [...value].sort((a, b) => b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => b[field] - a[field]);
    }
    else {
      if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
        return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => a[field] - b[field]);
    }
  }

}
