import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority',standalone:true
})
export class PriorityPipe implements PipeTransform {

  transform(value: 1|2|3): String {
    return value === 1 ? 'High' : value===2?'Medium':'Low';
  }

}
