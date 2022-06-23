import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface myData{
  success:boolean,
  username: string,
  quote:string
}

interface isLoggedIn{
  status:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>("/api/data")
  }

  
  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>("/api/isloggedin")
  }

  logout(){
    return this.http.get("/api/logout")
  }

  updateQuote(value : any){
    return this.http.post("/api/quoteUpdate", {value})
  }
}
