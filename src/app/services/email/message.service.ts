import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../../common/global-constants';
@Injectable({
   providedIn: 'root'
})
export class MessageService {
constructor(private _http: HttpClient) { }
sendMessage(body:any) {
 return this._http.post("http://"+GlobalConstants.getIPService()+":3604/email", body);
 }
}