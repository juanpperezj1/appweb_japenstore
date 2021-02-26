import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilItemComponent } from './perfil-item/perfil-item.component';
import { PerfilUpdateComponent } from './perfil-update/perfil-update.component';
import { NavigationModule } from '../navigation/navigation.module'


@NgModule({
  declarations: [PerfilComponent, PerfilItemComponent, PerfilUpdateComponent],
  imports: [
    CommonModule,
    NavigationModule
  ]
})
export class ProfileModule { }
