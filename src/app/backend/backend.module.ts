import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendRoutingModule } from './backend-routing.module';
import { ApiRegisterComponent } from './api-register/api-register.component';

@NgModule({
  imports: [
    CommonModule,
    BackendRoutingModule
  ],
  declarations: [ApiRegisterComponent]
})
export class BackendModule { }
