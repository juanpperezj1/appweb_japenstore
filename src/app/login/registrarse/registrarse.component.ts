import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UsersService } from '../../services/users/users.service';
import { AddUserService } from '../../services/addUser/add-user.service';
import { Router } from '@angular/router';
import { MessageService } from '../../services/email/message.service';
import { GlobalConstants } from '../../common/global-constants';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  public user: any;
  public mail: any;
  users: User[] = [];
  existingCoverList: any[] = [
    { option: 'Comprador' },
    { option: 'Vendedor' },
    { option: 'Administrador' }
  ];
  constructor(
    private _addUserService: AddUserService, private router: Router, private _usersService: UsersService, private _MessageService: MessageService) {
    _usersService.getUsers$()
      .subscribe(
        (response) => {
          if (response["rows"]) {
            this.users = response["rows"];
            console.log(this.users);
          }
        });
    this.user = {
      username: '',
      lastname: '',
      email: '',
      rol: '',
      boleta: null,
      pass: '',
    }
    this.mail = {
      nombre: "Juan", 
      asunto: "JapenStore", 
      email: "", 
      mensaje: ""
    }
  }
  redirect() {
    this.router.navigate(['/Japenstore']);
  }

  private cifrado(password) {

    var result = '';
    var recorrido = 5;
    var abc = 'abcdefghijklmnñopqrstuvwxyz';
    var pos = 0;
    password = password.toLowerCase();
    for (var i = 0; i < password.length; i++) {
      pos = abc.indexOf(password.charAt(i));
      if (pos >= 0) {
        result = result + abc.charAt((pos + recorrido) % abc.length);

      }
      else {
        result = result + password.charAt(i);
      }

    }

    return result;
  }
  public addUser() {
        this.user.pass = this.cifrado(this.user.pass);
        this.mail.email = this.user.email;
        this._MessageService.sendMessage(this.mail).subscribe(() => {
          console.log(this.mail);
        });
        this._addUserService.addAProduct(this.user);
        this.router.navigate(['/JapenStore']);
  }
  back() {
    this.router.navigate(['/JapenStore']);
  }
  ngOnInit(): void {
  }

}

