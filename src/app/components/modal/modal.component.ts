import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  tempImgs: string [] = [];
  imgPath: string;

  constructor(public f: FunctionsService) {
    this.tempImgs = f.tempImgs;
  }

  closeModal(i: number) {
    const modal = this.f.portfolioModalNumber(i);
    this.f.modalManager(modal, false);
  }

  imagePath(i: number): string {
    return this.imgPath = this.f.imagePath(i);
  }

}
