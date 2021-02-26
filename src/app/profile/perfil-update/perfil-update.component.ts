import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { AddUserService } from '../../services/addUser/add-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-update',
  templateUrl: './perfil-update.component.html',
  styleUrls: ['./perfil-update.component.css']
})
export class PerfilUpdateComponent implements OnInit {
  usuario:User;
  public user:any;
  existingCoverList: any[] = [
    { option: 'Comprador' },
    { option: 'Vendedor' },
    { option: 'Administrador' }
  ];
  constructor(private _addUserService:AddUserService, private router:Router) { 
    this.user={
      username:'',
      lastname:'',
      email:'',
      rol:'',
      boleta: null,
      pass:'',
    }
  }
  redirect(){
    this.router.navigate( ['/Japenstore'] );
  }
  public addUser(){
    this._addUserService.addAProduct(this.user);
  }
  ngOnInit(): void {
  }
}
