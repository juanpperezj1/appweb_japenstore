import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { NavigationModule } from '../navigation/navigation.module';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { ContraseniaDPipe } from './pipe/contrasenia-d.pipe';
@NgModule({
  declarations: [UsuarioComponent, UsuariosComponent, UsuarioDetalleComponent, UsuarioUpdateComponent, ContraseniaDPipe],
  imports: [
    CommonModule,
    NavigationModule,
    FormsModule
  ],
  exports: [
    UsuariosComponent
  ]
})
export class AdminModule { }
