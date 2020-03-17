import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ])
  })

  login() {
    // TODO: connect to auth service
    // let isValid = authService.login(this.form.value);
    let isValid = false;

    if (!isValid) {
      this.form.setErrors({
        invalidLogin: true
      })
    }
  }

  get username() {
    return this.form.get('username')
  }

  get password() {
    return this.form.get('password')
  }
}
