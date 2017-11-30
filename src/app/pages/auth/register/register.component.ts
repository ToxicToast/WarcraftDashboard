import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

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
    private _authService : AuthService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.submitted = true;
    const { nickname, email, password } = this.registerForm.value;
    this._authService.registerUser(email, password);
  }

  private createForm() {
    this.registerForm = this.fb.group({
      nickname: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }

}
