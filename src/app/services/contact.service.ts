import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = 'http://localhost/portfolio/api';
  // baseUrl = '../../../api';
  contact: Contact;

  constructor(private http: HttpClient) { }

  sendEmail() {
    console.log(this.contact);
    this.http.post(`${this.baseUrl}/email.php`, this.contact)
                  .subscribe(resp => console.log(resp), resp => console.log(resp));
  }
}
