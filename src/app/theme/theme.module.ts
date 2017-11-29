import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';

const importModules = [
  CommonModule
];
const declareModules = [
  HeaderComponent,
  FooterComponent
];
const exportModules = [];

@NgModule({
  imports: [
    ...importModules
  ],
  exports : [
    ...exportModules
  ],
  declarations: [
    ...declareModules,
  ]
})
export class ThemeModule { }
