import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

const AUTH_API = 'http://localhost:8080/api/auth/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:any
  username=""
  password=""
  constructor(private http:HttpClient) { }
  
     
  
  login(username,password): Observable<any>{
    return this.http.post(AUTH_API+'signin',{username,password},httpOptions);
  }

  register(username,email,password): Observable<any>{
    return this.http.post(AUTH_API+'signup',{username,email,password},httpOptions);
  }
}
