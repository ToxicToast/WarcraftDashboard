import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaidsRoutingModule } from './raids-routing.module';
import { ThemeModule } from '../../theme/theme.module';

const importModules = [
  CommonModule,
  RaidsRoutingModule,
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
export class RaidsModule { }
