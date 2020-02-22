import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  tempImgs: string[] = [];
  imgPath: string;

  constructor(public f: FunctionsService) {
    this.tempImgs = f.tempImgs;
  }

  openModal(i: number) {
    const modal = this.f.portfolioModalNumber(i);
    this.f.modalManager(modal, true);
  }

  imagePath(i: number): string {
    return this.imgPath = this.f.imagePath(i);
  }

}
