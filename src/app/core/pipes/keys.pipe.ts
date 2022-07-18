import { Pipe, PipeTransform } from '@angular/core';
import { IMonthItem } from '../models/month.model';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value: any, args?: string[]): { key: string; value: IMonthItem[] }[] {
    let keys = [];
    for (let key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}
