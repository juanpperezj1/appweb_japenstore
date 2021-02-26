import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams   } from '@angular/common/http';
import { Observable, throwError , Subject } from 'rxjs';

import { GlobalConstants } from '../../common/global-constants';
@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {
  private urlShopping = ''; 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  deleteUser(__id:string){
    this.urlShopping = "http://"+GlobalConstants.getIPService()+":3603/api/usuarios/"+__id;
    this.httpClient.delete(this.urlShopping)
        .subscribe(
            (val) => {
                console.log();
            },
            response => {
                console.log("DELETE call in error", response);
            },
            () => {
                console.log();
            });
  }
}
