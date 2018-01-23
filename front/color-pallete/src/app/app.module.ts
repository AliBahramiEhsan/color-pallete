import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserInfoGetComponent } from './components/user-info-get/user-info-get.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NeoPageComponent } from './components/neo-page/neo-page.component';
import { FormsModule } from '@angular/forms';
import { ColorMainComponent } from './components/color-main/color-main.component';
import { ColorDetailsComponent } from './components/color-details/color-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoGetComponent,
    LandingPageComponent,
    NeoPageComponent,
    ColorMainComponent,
    ColorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
