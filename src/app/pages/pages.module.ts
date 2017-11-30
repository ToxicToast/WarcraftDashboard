import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbThemeModule } from '@nebular/theme';
import { ThemeModule } from '../theme/theme.module';


const importModules = [
  CommonModule,
  PagesRoutingModule,
  NbLayoutModule,
  NbSidebarModule,
  ThemeModule
];
const declareModules = [];
const exportModules = [];
const provideModules = [
  NbSidebarService
];

@NgModule({
  imports: [
    ...importModules
  ],
  exports: [
    ...exportModules
  ],
  declarations: [
    ...declareModules
  ],
  providers: [
    ...provideModules
  ]
})
export class PagesModule { }
