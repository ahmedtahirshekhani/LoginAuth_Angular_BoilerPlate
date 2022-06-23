import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface myData{
  success:boolean,
  message:string
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInStatus = false

  constructor(private http:HttpClient) { }

  setLoggedInStatus(logStatus:boolean){
    this.loggedInStatus = logStatus;
  }

  get isLoggedIn(){
    return this.loggedInStatus
  }

  getUserDetails(username : any, password: any){
    return this.http.post<myData>("/api/login", {
      username, password
    })

  }

  registerUser(username:any, password:any){
    return this.http.post<myData>("/api/register", {
      username, password
    })
    
  }
}
