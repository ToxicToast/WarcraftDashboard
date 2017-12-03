import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private fb : FormBuilder,
    private router: Router,
    private _authService : AuthService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.submitted = true;
    const { nickname, email, password } = this.registerForm.value;
    const status = this._authService.registerUser(email, password, nickname);
    this.submitted = false;
    this.router.navigate(['/']);
  }

  private createForm() {
    this.registerForm = this.fb.group({
      nickname: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }

}
