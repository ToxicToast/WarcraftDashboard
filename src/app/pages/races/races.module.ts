import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RacesRoutingModule } from './races-routing.module';
import { ThemeModule } from '../../theme/theme.module';

const importModules = [
  CommonModule,
  RacesRoutingModule,
  ThemeModule
];
const declareModules = [];
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
export class RacesModule { }
