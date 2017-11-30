import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { AddCharactersComponent } from './add-characters/add-characters.component';
import { ThemeModule } from '../../theme/theme.module';

const importModules = [
  CommonModule,
  CharactersRoutingModule,
  ThemeModule
];
const declareModules = [
  ListCharactersComponent, 
  AddCharactersComponent
];
const exportModules = [];

@NgModule({
  imports: [
    ...importModules
  ],
  exports: [
    ...exportModules
  ],
  declarations: [
    ...declareModules
  ]
})
export class CharactersModule { }
