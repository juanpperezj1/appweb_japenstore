import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product/product';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos-comprador',
  templateUrl: './productos-comprador.component.html',
  styleUrls: ['./productos-comprador.component.css']
})
export class ProductosCompradorComponent implements OnInit {
  products:Product[] = [];
  mensajeError:any='';
  portforproduct ="";
  usuarioelegido:any={};
  constructor(  private _productsService:ProductsService,
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

}
