import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user/user';
import { UpdateUserService } from '../../services/updateUser/update-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {
  @Input() user:any={};
  @Output() chossen: EventEmitter<any>;
  
  existingCoverList: any[] = [
    { option: 'Comprador' },
    { option: 'Vendedor' },
    { option: 'Administrador' }
  ];
  constructor(private _updateUserService:UpdateUserService, private router:Router) { 
    this.chossen = new EventEmitter();
  }
  redirect(){
    this.router.navigate( ['/usuarios'] );
  }
  editar(user:any){
    console.log(this.user.pass);
    this.user.pass=this.cifrado(this.user.pass);
    console.log(this.user.pass);
    this._updateUserService.updateUser(user);
  }
  ngOnInit(): void {
  }




  

  private cifrado(password){
 
    var result = '';
    var recorrido= 5;
    var abc='abcdefghijklmnñopqrstuvwxyz';
    var pos=0;
    password=password.toLowerCase();
    for(var i=0;i<password.length;i++){
    pos=abc.indexOf(password.charAt(i));
        if(pos>=0){
        result=result+abc.charAt((pos+recorrido)%abc.length);
            
        }
        else{
            result=result+password.charAt(i);
        }

    }

    return result;
  }
}
