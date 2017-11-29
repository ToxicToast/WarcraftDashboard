import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const importModules = [
  CommonModule
];
const declareModules = [];
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
export class CoreModule { }
