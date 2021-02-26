import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams   } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';
import { User } from '../../models/user/user';

import { GlobalConstants } from '../../common/global-constants';
@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private _refreshNeeded$ = new Subject<void>();

  get getRefreshNeeded$(){
    return this._refreshNeeded$;
  }
  private urlshopping = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {   }
  public addAProduct(usuario: User) {
    this.urlshopping = "http://"+GlobalConstants.getIPService()+":3603/api/usuarios";
    this.httpClient.post(this.urlshopping, usuario)
        .subscribe(
          (val) => {
              console.log();
          },
          response => {
              console.log("POST call in error", response);
          },
          () => {
              console.log();
        });
  }
  parseLinkHeader(header) {
    if (header.length == 0) {
      return ;
    }
    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  errorHandler(error) {
    let errorMessage = '';
  
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
