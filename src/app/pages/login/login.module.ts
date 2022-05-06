import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormExtensionsModule } from 'src/app/shared/form-extensions/form-extensions.module';


@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormExtensionsModule
  ]
})
export class LoginModule { }
