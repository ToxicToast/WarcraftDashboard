import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { FirebaseAuth } from './helpers/FirebaseAuth';

const importModules = [
  CommonModule
];
const declareModules = [];
const exportModules = [];
const provideModules = [
  AuthService,
  FirebaseAuth
];

@NgModule({
  imports: [
    ...importModules
  ],
  exports : [
    ...exportModules
  ],
  declarations: [
    ...declareModules,
  ],
  providers : [
    ...provideModules
  ]
})
export class CoreModule { }
