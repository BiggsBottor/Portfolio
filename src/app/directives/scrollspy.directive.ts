import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appScrollspy]'
})
export class ScrollspyDirective {
  @Input() public spiedTags = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(private elRef: ElementRef) {}

  /* ----------------------------------------------
  For the scrollspy characteristic I used this reference:
  ->  https://stackoverflow.com/questions/54699125/how-to-use-bootstrap-scrollspy-on-angular-7-project
  with the follow modifications:
  - It must check the full window scroll to spy when is scroll it.
  - The currentSection variables store the id of the current section on the screen.
  - The next 3 variables store reference numbers to check where is the window scroll now
  - The parentOffSet variable has needed twice the reference because the offsetTop is not recognized it if not
  besides, the function checks if the DOM element has the same tag as the stored in the spiedTag variable
  (in other words, check if is a DIV or not)
  If it is, then store the id.
  Then, if the local currentSection is different, then the global variable is updated
  ---------------------------------------------- */
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    let currentSection: string;
    const children = this.elRef.nativeElement.children;
    const scrollTop = (event.target as HTMLElement).children[0].scrollTop;
    const parentOffset = ((event.target as HTMLElement).children[0] as HTMLElement).offsetTop;
    for (const element of children) {
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if ((element.offsetTop - parentOffset) <= scrollTop) {
            currentSection = element.id;
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }

}
