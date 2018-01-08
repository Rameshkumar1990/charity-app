import { CHARITY_APP_ROUTES } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppCommonModule } from './charity-app/app-common/app-common.module';
import { HomeModule } from './charity-app/home/home.module';
import { AboutModule } from './charity-app/about/about.module'
import { ContactModule } from './charity-app/contact/contact.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CHARITY_APP_ROUTES,
    BrowserModule,
    AppCommonModule,
    HomeModule,
    AboutModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
