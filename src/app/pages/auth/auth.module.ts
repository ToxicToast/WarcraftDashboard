import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ThemeModule } from '../../theme/theme.module';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';


const importModules = [
  CommonModule,
  AuthRoutingModule,
  ThemeModule,
  FormsModule,
  ReactiveFormsModule
];
const declareModules = [
  RegisterComponent, 
  LoginComponent,
];
const exportModules = [
  AuthRoutingModule
];

const provideModules = [];

@NgModule({
  imports: [
    ...importModules
  ],
  exports: [
    ...exportModules
  ],
  declarations: [
    ...declareModules
  ],
  providers: [
    ...provideModules
  ]
})
export class AuthModule { }
