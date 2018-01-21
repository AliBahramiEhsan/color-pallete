import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoGetComponent } from './components/user-info-get/user-info-get.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NeoPageComponent } from './components/neo-page/neo-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'userInfo', component: UserInfoGetComponent },
  { path: 'neoTest', component: NeoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
