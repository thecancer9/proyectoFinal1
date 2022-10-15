import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from './email-validator.directive';

interface IUser {
  userLogin: string;
  userRegister: string;
  passwordLogin: string;
  showPassword: boolean;
  passwordRegister: string;
  emailRegister: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm!: FormGroup;
  registerForm!: FormGroup;
  user: IUser
  loginSubmitted = false;
  passwordSubmitted = false;
  userRegisterSubmitted=false;
  passwordRegisterSubmitted=false;  
  emailSubmitted=false;

  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private router:Router) {
    this.user = {} as IUser
  }


  ngOnInit(): void {
    // login
    this.loginForm = new FormGroup({
      userLogin: new FormControl(this.user.userLogin, [
        Validators.required
      ]),
      passwordLogin: new FormControl(this.user.passwordLogin, [
        Validators.required
      ]),
    })

    //register
    this.registerForm = new FormGroup({
      userRegister: new FormControl(this.user.userRegister, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      passwordRegister: new FormControl(this.user.passwordRegister, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      emailRegister: new FormControl(this.user.emailRegister, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
        emailValidator()
      ]),

    });
  }

  get userLogin() {
    return this.loginForm.get('userLogin')!;
  }
  get passwordLogin() {
    return this.loginForm.get('passwordLogin')!;
  }
  get userRegister() {
    return this.registerForm.get('userRegister')!;
  }
  get passwordRegister() {
    return this.registerForm.get('passwordRegister')!;
  }
  get emailRegister() {
    return this.registerForm.get('emailRegister')!;
  }

  public Validate(): void {
    if (this.userLogin.invalid) {
      for (const control of Object.keys(this.loginForm.controls)) {
        this.loginForm.controls[control].markAsTouched();
      }
      return;
    }

    this.user = this.loginForm.value
    console.info('Nombre:', this.user.userLogin);
    console.info('Contraseña:', this.user.passwordLogin);
    console.info('Usuario:', this.user.userRegister);
    console.info('Contraseña:', this.user.passwordRegister);
    console.info('Correo:', this.user.emailRegister);
  }
  
  loginSubmit(): void {
    this.loginSubmitted = true;

    
    if (this.loginForm.valid) {
      this.router.navigateByUrl('')
      // return;
    }
  }
  passwordSubmit(): void {
    this.passwordSubmitted = true;

    
    if (this.loginForm.valid) {
      this.router.navigateByUrl('')
      // return;
    }
  }
  userRegisterSubmit(): void {
    this.userRegisterSubmitted = true;

    
    if (this.registerForm.valid) {
      this.router.navigateByUrl('')
      // return;
    }
  }
  passwordRegisterSubmit(): void {
    this.passwordRegisterSubmitted = true;

    
    if (this.registerForm.valid) {
      this.router.navigateByUrl('')
      // return;
    }
  }
  emailSubmit(): void {
    this.emailSubmitted = true;

    
    if (this.registerForm.valid) {
      this.router.navigateByUrl('')
      // return;
    }
  }
  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

}