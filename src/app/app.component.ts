import { Component } from '@angular/core';
import { FunctionsService } from './services/functions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(public f: FunctionsService) {}

  onSectionChange(sectionId: string) {
    this.f.currentSection = sectionId;
  }

}
