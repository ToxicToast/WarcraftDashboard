import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ThemeModule } from '../../theme/theme.module';

const importModules = [
  CommonModule,
  ClassesRoutingModule,
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
export class ClassesModule { }
