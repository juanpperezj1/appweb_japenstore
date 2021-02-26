import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { JapensoftLoginComponent } from './japensoft-login/japensoft-login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { MessageService } from "../services/email/message.service";


@NgModule({
  declarations: [JapensoftLoginComponent, RegistrarseComponent, IniciarsesionComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers:[
    MessageService
  ]
})
export class LoginModule { }
