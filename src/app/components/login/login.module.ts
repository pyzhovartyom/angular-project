import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared.module';
import { LoginUserComponent } from '../login-user/login-user.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginRoutingModule } from './login-routing.module';
import { DataService } from 'src/app/_services/data.service';
import { UserService } from 'src/app/_services/user.service';


@NgModule({
  declarations: [
    LoginComponent,
    LoginUserComponent,
    RegistrationComponent,
  ],
  exports: [
    LoginComponent,
    LoginUserComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    LoginRoutingModule
  ],
  providers: [
    DataService,
    UserService,
  ],
})
export class LoginModule { }
