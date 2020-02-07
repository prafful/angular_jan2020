import { Pipe, PipeTransform } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Pipe({
  name: 'sort'
})
export class SuperstringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args);
    console.log('Value received: ' + value);
    if (args[0] === '0') {
      return value.sort();
    }
    if (args[0] === '1') {
      return value.sort().reverse();
    }

    return value.sort();
  }

}
