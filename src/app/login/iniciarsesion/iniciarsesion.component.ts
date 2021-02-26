import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user/user';


@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})

export class IniciarsesionComponent implements OnInit {
  public user: any;
  users: User[] = [];

  constructor(private _usersService: UsersService,
    private router: Router
  ) {
    _usersService.getUsers$()
      .subscribe(
        (response) => {
          if (response["rows"]) {
            this.users = response["rows"];
            console.log(this.users);
          }
        });
    this.user = {
      usuario: '',
      pass: ''
    }
  }

  public descifrar(passwordC){
    var recorrido= 5;
    var pos=0;
    var res=0;
    var result='';
    var abc='abcdefghijklmnñopqrstuvwxyz';
    passwordC=passwordC.toLowerCase();
    for(var i=0;i<passwordC.length;i++){
        pos=abc.indexOf(passwordC.charAt(i));
             if(pos>=0){
                res=pos-recorrido;
                if(res<0){
                res=pos-recorrido+27;        
                }
                else{
                    res=pos-recorrido;
                }
               result=result+abc.charAt((res)%abc.length);
               
            }
            else{
                result=result+passwordC.charAt(i);
            }
            
    }
        return result;

}
  public logMeIn(){
    console.log(this.users);
   for(let user of this.users ){

    var pas = this.descifrar(user.pass);
    var con = this.user.pass.toLowerCase;
    
    if(this.user.usuario == user.boleta && this.user.pass == pas){
      this.router.navigate( ['/usuarios'] );
    }
    else{
      console.log('Usuario y/o paswword incorrecto');

    }
   }
  }
   // this.router.navigate( ['/usuarios'] );



/* public logMeIn() {
    console.log(this.users);
 origin



>>>>>>> origin
    
    for (let user of this.users) {
      if (this.user.usuario == user.boleta && this.user.pass == user.pass) {
        switch (user.rol) {
          case 'Administrador':
            this.router.navigate(['/usuarios']);
            break;
          case 'Vendedor':
            this.router.navigate(['/vendedor']);
            break;
          default:
            alert("eres comprador");
            break;
        }
      }
    }
  }
*/


  register(){
    this.router.navigate(['/registro']);
  }
  ngOnInit(): void {

  }

}