import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { NavHomeComponent } from './nav-home/nav-home.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule
  ]
})
export class HomeModule { }
