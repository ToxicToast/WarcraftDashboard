import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbThemeModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';

const importModules = [
  CommonModule,
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
  NbCheckboxModule
];
const declareModules = [
  HeaderComponent,
  FooterComponent,
  ContentComponent
];
const exportModules = [
  HeaderComponent,
  FooterComponent,
  ContentComponent,
  NbCardModule,
  NbCheckboxModule
];
const provideModules = [
  NbSidebarService
];

@NgModule({
  imports: [
    ...importModules
  ],
  exports : [
    ...exportModules
  ],
  declarations: [
    ...declareModules,
  ],
  providers: [
    ...provideModules
  ]
})
export class ThemeModule { }
