import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private fb : FormBuilder,
    private router: Router,
    private _authService : AuthService
  ) {
    //console.log(this);
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }

  onSubmit() {
    this.submitted = true;
    const { email, password } = this.loginForm.value;
    this._authService.loginUser(email, password);
    this.submitted = false;
    //this.router.navigate(['/']);
  }

}
