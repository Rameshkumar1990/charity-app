import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { SignupNavbarComponent } from './components/signup/signup-navbar/signup-navbar.component';

import { SignupDataService } from './service/signup-data.service';
import { PersonalComponent } from './components/signup/personal/personal.component';
import { WorkComponent } from './components/signup/work/work.component'

@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent,
        SignupComponent,
        PasswordResetComponent,
        SignupNavbarComponent,
        PersonalComponent,
        WorkComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    providers: [
        SignupDataService
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }