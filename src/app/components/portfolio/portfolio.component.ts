import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  tempImgs: string[] = [];

  constructor(public f: FunctionsService) {
    this.tempImgs = f.tempImgs;
  }

  ngOnInit() {
  }

  openModal(i: number) {
    const modal = this.f.portfolioModalNumber(i);
    this.f.modalManager(modal, true);
  }

}
