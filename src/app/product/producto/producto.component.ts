import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product/product';
import { ProductsService } from '../../services/products/products.service';
import { DeleteProductService } from '../../services/deletesProduct/delete-product.service';
import { UpdateProductComponent } from '../update-product/update-product.component';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() product: any = {};
  @Input() index: number;
  @Output() productSeleccionado: EventEmitter<number>;
  @ViewChild('selector2') selector2: UpdateProductComponent;
  usuarioelegido:any={};
  show: boolean = false;
  shoppingcartIdentity = new Array<Product>();
  mensajeError:any='';
  constructor(private router: Router, 
              private _productsService: ProductsService,
              private _deleteProductService: DeleteProductService) {
    this.productSeleccionado = new EventEmitter();
  }
  ngOnInit() {
  }
  verProduct() {
    this.router.navigate( ['/buscar', this.index] );
  }
  editarproducto(product:any){    
    this.usuarioelegido=product;
    this.selector2.product=this.usuarioelegido;
    console.log(this.selector2.product)
  }
  eliminarproducto(id:string){
    this._deleteProductService.deleteProduct(id);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['vendedor']);
  }); 
}
}
