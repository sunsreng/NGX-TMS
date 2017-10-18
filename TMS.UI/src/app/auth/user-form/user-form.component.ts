import { Custom } from './custom';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  public userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      name: [null],
      email: [null],
      size: null
    });
    this.send();
   }

   get name() {
    return this.userForm.get('name') as FormControl;
  }

  get email() {
    return this.userForm.get('email') as FormControl;
  }

  get size() {
    return this.userForm.get('size') as FormControl;
  }
  send() {
    console.log(this.userForm.value);
  }

  reset() {
    this.userForm.reset();
  }
}
