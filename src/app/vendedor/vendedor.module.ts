import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioVendedorComponent } from './usuario-vendedor/usuario-vendedor.component';
import { ProductModule } from '../product/product.module';
import { NavigationModule } from '../navigation/navigation.module';
@NgModule({
  declarations: [UsuarioVendedorComponent],
  imports: [
    CommonModule,
    ProductModule,
    NavigationModule
  ],
  exports:[
    UsuarioVendedorComponent
  ]
})
export class VendedorModule { }
