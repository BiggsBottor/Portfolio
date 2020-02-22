import { Pipe, PipeTransform } from '@angular/core';
import { FunctionsService } from '../services/functions.service';


@Pipe({
  name: 'getModalText'
})
export class GetModalTextPipe implements PipeTransform {

  constructor(private f: FunctionsService) {}

  transform(isDefault: boolean, index: number): any {
    return this.getText(isDefault, index);
  }

  getText(isDeafult: boolean, i: number) {
    if (!isDeafult) {
      return this.f.allModalTexts[i + 1].text;
    } else {
      return this.f.allModalTexts[0].text;
    }
  }

}
