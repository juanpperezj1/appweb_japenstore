import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Product } from '../../models/product/product';

import { GlobalConstants } from '../../common/global-constants';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlUsers  = '';
  private products$ = new Subject<Product[]>();
  constructor( public http: HttpClient ) {}
  public getProducts$(): Observable<Product[]> {
    this.urlUsers = "http://"+GlobalConstants.getIPService()+":3602/api/products/";
    return this.http.get<Product[]>(this.urlUsers);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
 }
}
