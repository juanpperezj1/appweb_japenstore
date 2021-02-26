import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [ProductoComponent, ProductosComponent, ProductoDetalleComponent, RegistrarProductoComponent, UpdateProductComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ProductosComponent
  ]
})
export class ProductModule { }
