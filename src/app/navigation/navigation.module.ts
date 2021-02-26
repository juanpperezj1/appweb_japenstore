import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavoptionComponent } from './navoption/navoption.component';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, NavoptionComponent],
  imports: [
    CommonModule
  ]
  ,
  exports: [
    NavbarComponent
  ]

})
export class NavigationModule { }
