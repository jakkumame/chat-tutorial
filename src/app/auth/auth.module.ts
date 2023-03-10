import { SigninPage } from './signin/signin.page';
import { SignupPage } from './signup/signup.page';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupPage,
  },
  {
    path: 'signin',
    component: SigninPage,
  }
];

@NgModule({
  declarations: [
    SignupPage,
    SigninPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
