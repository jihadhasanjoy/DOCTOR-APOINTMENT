import { Pipe, PipeTransform } from '@angular/core';


/**
 * Helper to produce an array of enum values.
 * @param enumeration Enumeration object.
 */
@Pipe({
    name: 'enumToArray'
  })
  export class EnumToArrayPipe implements PipeTransform {
    transform(enumeration: object): any {
      const keys = Object.keys(enumeration);
      // return keys.slice(keys.length / 2);
      return keys;
    }
  }
