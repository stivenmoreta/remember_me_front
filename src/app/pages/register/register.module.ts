import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormRegisterComponent } from './form-register/form-register.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { FormExtensionsModule } from '../../shared/form-extensions/form-extensions.module';


@NgModule({
  declarations: [
    RegisterComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormExtensionsModule
  ]
})
export class RegisterModule { }
