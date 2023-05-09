import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url:string;
  constructor(private _http:HttpClient) { 
    this.url = global.url;
  }

  public getUser():Observable<any>{
    return this._http.get(this.url+'api/users?page=2');
  }

}
