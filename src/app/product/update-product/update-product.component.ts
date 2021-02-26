import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user/user';
import { UpdateProductService } from '../../services/updateProduct/update-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  @Input() product:any={};
  @Output() chossen: EventEmitter<any>;
  
  existingCoverList: any[] = [
    { option: 'Frutas' },
    { option: 'Desayunos' },
    { option: 'Comidas' },
    { option: 'Liquidos' },
    { option: 'Frituras' }
  ];
  constructor(private _updateProductService:UpdateProductService, private router:Router) { 
    console.log(this.product)
    this.chossen = new EventEmitter();
  }
  redirect(){
    this.router.navigate( ['/vendedor'] );
  }
  editar(product:any){
    console.log(product);
    this._updateProductService.updateProduct(product);
  }
  ngOnInit(): void {
  }

}
