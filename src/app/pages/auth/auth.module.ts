import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbEmailPassAuthProvider, NbAuthModule } from '@nebular/auth';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ThemeModule } from '../../theme/theme.module';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';


const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};

const authConfig = {
  baseEndpoint: '',
  login: {
    alwaysFail: false,
    rememberMe: true,
    endpoint: '/api/auth/login',
    method: 'post',
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Login/Email combination is not correct, please try again.'],
    defaultMessages: ['You have been successfully logged in.'],
  },
  register: {
    alwaysFail: false,
    rememberMe: true,
    endpoint: '/api/auth/register',
    method: 'post',
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['You have been successfully registered.'],
  },
  logout: {
    alwaysFail: false,
    endpoint: '/api/auth/logout',
    method: 'delete',
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['You have been successfully logged out.'],
  },
  requestPass: {
    endpoint: '/api/auth/request-pass',
    method: 'post',
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['Reset password instructions have been sent to your email.'],
  },
  resetPass: {
    endpoint: '/api/auth/reset-pass',
    method: 'put',
    redirect: {
      success: '/',
      failure: null,
    },
    resetPasswordTokenKey: 'reset_password_token',
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['Your password has been successfully changed.'],
  },
  token: {
    key: 'data.token',
    getter: (module: string, res: HttpResponse<Object>) => { console.log(res.body); },
  },
  errors: {
    key: 'data.errors',
    getter: (module: string, res: HttpErrorResponse) => { console.log(res.error); },
  },
  messages: {
    key: 'data.messages',
    getter: (module: string, res: HttpResponse<Object>) => { console.log(res.body); },
  },
 };

const authModule = NbAuthModule.forRoot({
  providers: {
    email: {
      service: NbEmailPassAuthProvider,
      config: authConfig,
    },
  },
  forms: {},
});

const importModules = [
  CommonModule,
  AuthRoutingModule,
  ThemeModule,
  authModule
];
const declareModules = [
  RegisterComponent, 
  LoginComponent,
];
const exportModules = [];

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
