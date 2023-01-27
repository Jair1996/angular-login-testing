import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [],
})
export class LoginPageComponent {
  showAlert: boolean = false;
  userLoggedIn: string = '';

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder) {}

  isTheFieldInvalid(field: string) {
    return (
      this.loginForm.controls[field].errors &&
      this.loginForm.controls[field].dirty
    );
  }

  login() {
    this.showAlert = true;
    this.userLoggedIn = this.loginForm.get('username')?.value;

    this.loginForm.reset();

    setTimeout(() => {
      this.showAlert = false;
    }, 2500);
  }
}
