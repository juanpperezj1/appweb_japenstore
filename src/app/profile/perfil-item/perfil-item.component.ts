import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-item',
  templateUrl: './perfil-item.component.html',
  styleUrls: ['./perfil-item.component.css']
})
export class PerfilItemComponent implements OnInit {
  users:User[] = [];
  mensajeError:any='';
  portforproduct ="";
  constructor( private _usersService:UsersService,
               private router:Router
                ) {
                _usersService.getUsers$()
                .subscribe(
                  (response) => {
                      if (response["rows"]) {
                        this.users = response["rows"];  
                        console.log(this.users);

                      }});               
                
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  verUsuario( idx:number ){
    this.router.navigate( ['/usuarios',idx] );
  }
}
