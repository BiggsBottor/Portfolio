import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  tempImgs: string [] = [];

  constructor(public f: FunctionsService) {
    this.tempImgs = f.tempImgs;
  }

  ngOnInit() {
  }

  closeModal(i: number) {
    const modal = this.f.portfolioModalNumber(i);
    this.f.modalManager(modal, false);
  }

}
