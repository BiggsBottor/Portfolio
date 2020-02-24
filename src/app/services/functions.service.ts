import { Injectable } from '@angular/core';
import { ModalText } from '../models/modal-text';
import * as ModalTextJSON from '../../assets/json/modal-text.json';


@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  // this array manage de portfolio files name.
  // public tempImgs: string [] = ['cabin', 'cake', 'circus', 'game', 'safe', 'submarine']; // all default imgs
  public tempImgs: string [] = ['portfolio', 'Pacman3D', 'libreria', 'pirobloc', 'marketinglabs', 'game']; // all default imgs
  public isDefaultImg: boolean [] = [false, false, false, false, false, true];

  public isModalOpen = false;

  public defaultPath = 'assets/freelancer/img/portfolio/';
  public imgPath = 'assets/img/';

  public allModalTexts: ModalText [] = [];

  // for scrollSpy directive
  currentSection = 'top';

  constructor() {
    this.allModalTexts = (ModalTextJSON as any).default;
  }

  // return the right image path
  imagePath(i: number): string {
    if (this.isDefaultImg[i]) {
      return this.defaultPath;
    } else {
      return this.imgPath;
    }
  }

  // id #portfolioModal1
  portfolioModalNumber(i: number): string {
    return `#portfolioModal${i + 1}`;
  }

  /* --------------------------------------------
  1) to open the modal, firts apply d-block class
  2) to close the modal, firts remove the show class
  -------------------------------------------- */
  modalManager(id: string, show: boolean) {
    const el = document.getElementById(id) as HTMLElement;

    if (show) {
      el.classList.add('d-block');
    } else {
      el.classList.remove('show');
    }

    setTimeout(() => {
      if (show) {
        el.classList.add('show');
      } else {
        el.classList.remove('d-block');
      }
      this.isModalOpen = !this.isModalOpen;
    }, 200);

  }

}
