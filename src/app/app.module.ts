import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

//modulos que cargan maás modulos 
import { AdminModule } from '../app/admin/admin.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { CompradorModule } from './comprador/comprador.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageService } from './services/email/message.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CompradorModule,
    VendedorModule,
    LoginModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
