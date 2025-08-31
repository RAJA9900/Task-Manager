import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string | null | undefined, limit = 120, trail = '…'): string
{
const str = value ?? '';
return str.length > limit ? str.slice(0, limit) + trail : str;
}

}
