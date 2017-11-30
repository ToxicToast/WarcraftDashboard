import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuildsRoutingModule } from './guilds-routing.module';
import { ThemeModule } from '../../theme/theme.module';

const importModules = [
  CommonModule,
  GuildsRoutingModule,
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
export class GuildsModule { }
