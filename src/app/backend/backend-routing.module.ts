import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiRegisterComponent } from './api-register/api-register.component';

const routes: Routes = [
  { path: 'register', component: ApiRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
