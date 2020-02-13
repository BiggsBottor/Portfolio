import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  // this array manage de portfolio files name. TODO: replace with real portfolio names
  public tempImgs: string [] = ['cabin', 'cake', 'circus', 'game', 'safe', 'submarine'];
  public isModalOpen = false;
  // for scrollSpy directive
  currentSection = 'top';

  constructor() {}

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
