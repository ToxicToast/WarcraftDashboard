import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesModule } from './pages/pages.module';
import { BackendModule } from './backend/backend.module';

import { NotFoundComponent } from './not-found.component'

const routes: Routes = [
  { path: 'pages', loadChildren: () => PagesModule },
  { path: 'api', loadChildren: () => BackendModule },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

const options = {
  useHash: true,
  enableTracing: false
}

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
