import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface IUser {
  unserName: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerUser!: FormGroup;
  user: IUser

  loginForm: FormGroup = new FormGroup({
    loginUser: new FormControl(''),
    loginPassword: new FormControl('')
  })
  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private router:Router) {
    this.user = {} as IUser
  }


  ngOnInit(): void {
    // register
    // this.registerUser = new FormGroup({
    //   userName: new FormControl('',[
    //     Validators.required,
    //     Validators.minLength(1),
    //     Validators.maxLength(5)
    //   ])
    // });

    // login
    this.loginForm = this.fb.group({
      loginUser: ['', Validators.required],
      loginPassword: ['',Validators.required]
    });
  }

  get f(): {[key: string]:AbstractControl} {
    return this.loginForm.controls;
  }

  get userName() {
    return this.registerUser.get('userName')!;
  }

  /**
   * Validate
 : void  */
  public Validate(): void {
    if (this.registerUser.invalid) {
      return;
    }

    this.user = this.registerUser.value
  }

  onSubmit(): void {
    this.submitted = true;

    
    if (this.loginForm.valid) {
      this.router.navigateByUrl('')
      // return;
    }
  }

}