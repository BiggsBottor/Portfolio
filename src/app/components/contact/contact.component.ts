import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  forma: FormGroup;
  hasErrors: boolean;
  isSubmited: boolean;
  validEmail = '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,4}'; // a@a.aa
  validPhone = '^((\\+{1})*)+(([0-9]{1,3})*)+([0-9]{9})$'; // https://regexr.com/ visit this to check the pattern

  // error message variables
  nameError: string;
  emailError: string;
  phoneError: string;
  messageError: string;

  constructor() {
    this.hasErrors = false;
    this.isSubmited = false;
    this.forma = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.validEmail)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.validPhone)]),
      message: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit() {
    // this.isSubmited = true;
    if (!this.forma.valid) {
      this.hasErrors = true;

      this.nameError = this.emailError = this.phoneError = this.messageError = '';

      // show error on console
      if (this.forma.controls.name.errors != null) {
        console.log('name error:' , this.forma.controls.name.errors);
      }
      if (this.forma.controls.email.errors != null) {
        console.log('email error:' , this.forma.controls.email.errors);
      }
      if (this.forma.controls.phone.errors != null) {
        console.log('phone error:' , this.forma.controls.phone.errors);
      }
      if (this.forma.controls.message.errors != null) {
        console.log('message error:' , this.forma.controls.message.errors);
      }

      // name error messages
      if (this.forma.controls.name.errors != null) {
        if (this.forma.controls.name.errors.required) {
          this.nameError = 'Please enter your name.';
        } else if (this.forma.controls.name.errors.minlength.actualLength < 3) {
          this.nameError = 'Please enter at least 3 characters.';
        }
      }

      // email error messages
      if (this.forma.controls.email.errors != null) {
        if (this.forma.controls.email.errors.required) {
          this.emailError = 'Please enter your email address.';
        } else if (this.forma.controls.email.errors.pattern) {
          this.emailError = 'Not a valid email address.';
        }
      }

      // phone error messages
      if (this.forma.controls.phone.errors != null) {
        if (this.forma.controls.phone.errors.required) {
          this.phoneError = 'Please enter your phone number.';
        } else if (this.forma.controls.phone.errors.pattern) {
          this.phoneError = 'Not a valid phone number.';
        }
      }

      // message error messages
      if (this.forma.controls.message.errors != null) {
        if (this.forma.controls.message.errors.required) {
          this.messageError = 'Please enter a message.';
        } else if (this.forma.controls.message.errors.minlength.actualLength < 5) {
          this.messageError = 'Please enter at least 5 characters.';
        }
      }
    } else {
      this.hasErrors = false;
      this.isSubmited = true;
      console.log(this.forma);
    }
  }

  // Show the label of the contact form elements
  onChange(formValue: string, formElementId: string) {
    // this.isSubmited = false;
    const el = document.getElementById(formElementId).parentElement;
    if (formValue !== '') {
        el.classList.add('floating-label-form-group-with-value');
    } else {
      el.classList.remove('floating-label-form-group-with-value');
    }
  }

  onFocus(formElementId: string) {
    const el = document.getElementById(formElementId).parentElement;
    el.classList.add('floating-label-form-group-with-focus');
  }

  onBlur(formElementId: string) {
    const el = document.getElementById(formElementId).parentElement;
    el.classList.remove('floating-label-form-group-with-focus');
  }

}
