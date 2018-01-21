import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserInfoGetComponent } from './components/user-info-get/user-info-get.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NeoPageComponent } from './components/neo-page/neo-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInfoGetComponent,
    LandingPageComponent,
    NeoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
