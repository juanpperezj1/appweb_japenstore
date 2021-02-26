import { Component, OnInit, ViewChild  } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { DeleteUserService } from '../../services/deletesUser/delete-user.service';
import { UpdateUserService } from '../../services/updateUser/update-user.service';
import { User } from '../../models/user/user';
import { Router } from '@angular/router';
import { UsuarioUpdateComponent } from '../usuario-update/usuario-update.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  @ViewChild('selector1') selector1: UsuarioUpdateComponent;
  users:User[] = [];
  mensajeError:any='';
  usuarioelegido:any={};
  portforproduct ="";
  headElements = ['ID', 'Nombre', 'Apellido', 'Rol', 'Boleta', 'Email', 'Contraseña', 'Actions'];


  constructor(  private _usersService:UsersService,
                private _deleteUserService:DeleteUserService,
                private _updateUserService:UpdateUserService,
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
    
  }
  verUsuario( idx:number ){
    this.router.navigate( ['/usuarios',idx] );
  }
  redirect(){
    this.router.navigate( ['/perfil'] );
  }
  adduser(){
    this.router.navigate( ['/registro'] );
  }
  editarusuario(user:any){    
    this.usuarioelegido=user;
    this.selector1.user=this.usuarioelegido;
  }
  eliminarusuario(id:string){
    this._deleteUserService.deleteUser(id);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['usuarios']);
  }); 
  }
}
