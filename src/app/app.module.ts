import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbThemeModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { PagesModule } from './pages/pages.module';
import { ThemeModule } from './theme/theme.module';
import { CoreModule } from './core/core.module';
import { BackendModule } from './backend/backend.module';
import { NotFoundComponent } from './not-found.component';

export const firebaseConfig = {
  apiKey: environment.apiKeys.Firebase.apiKey,
  authDomain: environment.apiKeys.Firebase.authDomain,
  databaseURL: environment.apiKeys.Firebase.databaseURL,
  storageBucket: environment.apiKeys.Firebase.storageBucket,
  messagingSenderId: environment.apiKeys.Firebase.messagingSenderId
};

const importModules = [
  BrowserModule,
  AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  NbThemeModule.forRoot({ name: 'cosmic' }),
  NbLayoutModule,
  NbSidebarModule,
  ThemeModule,
  PagesModule,
  BackendModule,
  CoreModule
];
const declareModules = [
  AppComponent,
  NotFoundComponent
];
const exportModules = [];
const provideModules = [
  NbSidebarService
];

@NgModule({
  declarations: [
    ...declareModules,
  ],
  imports: [
    ...importModules
  ],
  providers: [
    ...provideModules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
