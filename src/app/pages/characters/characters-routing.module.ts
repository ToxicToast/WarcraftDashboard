import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCharactersComponent } from './list-characters/list-characters.component';
import { AddCharactersComponent } from './add-characters/add-characters.component';

const routes: Routes = [
  { path: '', component: ListCharactersComponent },
  { path: 'create', component: AddCharactersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
