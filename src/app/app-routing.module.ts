import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JapensoftLoginComponent } from './login/japensoft-login/japensoft-login.component';
import { RegistrarseComponent } from './login/registrarse/registrarse.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { UsuarioCompradorComponent } from './comprador/usuario-comprador/usuario-comprador.component';
import { UsuarioVendedorComponent } from './vendedor/usuario-vendedor/usuario-vendedor.component';
import { PerfilItemComponent } from './profile/perfil-item/perfil-item.component';
import {RegistrarProductoComponent} from './product/registrar-producto/registrar-producto.component';

const routes: Routes = [
  { path: 'Japenstore', component: JapensoftLoginComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'comprador', component: UsuarioCompradorComponent },
  { path: 'vendedor', component: UsuarioVendedorComponent },
  { path: 'registro', component: RegistrarseComponent },
  { path: 'perfil', component: PerfilItemComponent },
  { path: 'registro-producto', component: RegistrarProductoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Japenstore' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
