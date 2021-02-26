import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product';
import { AddProductService } from '../../services/addProduct/add-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  public product:any;
  existingCoverList: any[] = [
    { option: 'Frutas' },
    { option: 'Desayunos' },
    { option: 'Comidas' },
    { option: 'Liquidos' },
    { option: 'Frituras' }
  ];
  constructor(private _addProductService:AddProductService, private router:Router) { 
    this.product={
      nombre:'',
      cantidad:'',
      categoryid:'',
      precio:'',
      descripcion:'',
      img:''
    }
  }
  redirect(){
    this.router.navigate( ['/vendedor'] );
  }
  public AddProduc(){

    this._addProductService.addAProduct(this.product);
  }
  ngOnInit(): void {
  }

}
