import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from '../../models/user/user';

import { GlobalConstants } from '../../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private urlUsers  = '';
  private products$ = new Subject<User[]>();
  constructor( public http: HttpClient ) {}
  public getUsers$(): Observable<User[]> {
    this.urlUsers = "http://"+GlobalConstants.getIPService()+":3603/api/usuarios/";
    return this.http.get<User[]>(this.urlUsers);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
 }
}
