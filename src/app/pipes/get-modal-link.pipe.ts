import { Pipe, PipeTransform } from '@angular/core';
import { FunctionsService } from '../services/functions.service';

@Pipe({
  name: 'getModalLink'
})
export class GetModalLinkPipe implements PipeTransform {

  constructor(private f: FunctionsService) {}

  transform(isDefault: boolean, index: number): any {
    return this.getLink(isDefault, index);
  }

  getLink(isDeafult: boolean, i: number) {
    if (!isDeafult) {
      return this.f.allModalTexts[i + 1].link;
    } else {
      return this.f.allModalTexts[0].link;
    }
  }

}
