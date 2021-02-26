import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user/user';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @Input() user: any = {};
  @Input() index: number;
  @Output() userSeleccionado: EventEmitter<number>;
  show: boolean = false;
  shoppingcartIdentity = new Array<User>();
  mensajeError:any='';
  constructor(private router: Router, 
              private _usersService: UsersService,) {
    this.userSeleccionado = new EventEmitter();
  }
  ngOnInit() {
  }
  verUser() {
    this.router.navigate( ['/buscar', this.index] );
  }
  addShoppingcart(shoppingcart:User){
    // this.__addShoppingcartService.addToShoppingcart(shoppingcart);
    //window.location.reload();
 }
}
