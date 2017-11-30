import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { CharactersModule } from './characters/characters.module';

const routes: Routes = [
  { path: 'auth', loadChildren: () => AuthModule },
  { path: 'characters', loadChildren: () => CharactersModule },
  { path: 'classes', loadChildren: () => CharactersModule },
  { path: 'guilds', loadChildren: () => CharactersModule },
  { path: 'races', loadChildren: () => CharactersModule },
  { path: 'raids', loadChildren: () => CharactersModule },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
