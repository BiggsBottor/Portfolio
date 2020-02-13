import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public f: FunctionsService) { }

  ngOnInit() {
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView({behavior: 'smooth'});
  }

}
