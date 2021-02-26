import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product/product';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { DeleteProductService } from '../../services/deletesProduct/delete-product.service';
import { UpdateProductService } from '../../services/updateProduct/update-product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @ViewChild('selector2') selector2: UpdateProductComponent;
  products:Product[] = [];
  mensajeError:any='';
  portforproduct ="";
  usuarioelegido:any={};
  constructor(  private _productsService:ProductsService,
                private _deleteProductService:DeleteProductService,
                private router:Router
                ) {
                  _productsService.getProducts$()
                .subscribe(
                  (response) => {
                      if (response["rows"]) {
                        this.products = response["rows"];  
                        console.log(this.products);

                      }});               
                
  }
  ngOnInit() {
  }
  verProducto( idx:number ){
    this.router.navigate( ['/products',idx] );
  }
  editarproducto(product:any){    
    this.usuarioelegido=product;
    this.selector2.product=this.usuarioelegido;
  }
  eliminarproducto(id:string){
    this._deleteProductService.deleteProduct(id);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['usuarios']);
  }); 
  }
}
