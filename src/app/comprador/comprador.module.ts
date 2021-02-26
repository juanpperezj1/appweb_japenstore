import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCompradorComponent } from './usuario-comprador/usuario-comprador.component';
import { ProductModule } from '../product/product.module';
import { ProductosCompradorComponent } from './productos-comprador/productos-comprador.component';
import { CompradorNavComponent } from './comprador-nav/comprador-nav.component';
import { ProductoCompradorComponent } from './producto-comprador/producto-comprador.component';
@NgModule({
  declarations: [UsuarioCompradorComponent, ProductosCompradorComponent, CompradorNavComponent, ProductoCompradorComponent],
  imports: [
    CommonModule,
    ProductModule
  ],
  exports:[
    UsuarioCompradorComponent
  ]
})
export class CompradorModule { }
