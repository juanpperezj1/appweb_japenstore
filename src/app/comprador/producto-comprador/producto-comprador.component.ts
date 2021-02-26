import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product/product';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-producto-comprador',
  templateUrl: './producto-comprador.component.html',
  styleUrls: ['./producto-comprador.component.css']
})
export class ProductoCompradorComponent implements OnInit {
  @Input() product: any = {};
  @Input() index: number;
  @Output() productSeleccionado: EventEmitter<number>;
  usuarioelegido:any={};
  show: boolean = false;
  shoppingcartIdentity = new Array<Product>();
  mensajeError:any='';
  constructor(private router: Router, 
              private _productsService: ProductsService) {
    this.productSeleccionado = new EventEmitter();
  }
  ngOnInit() {
  }
  verProduct() {
    this.router.navigate( ['/buscar', this.index] );
  }

}

