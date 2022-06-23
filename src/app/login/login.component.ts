import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(event : any){
    event.preventDefault();
    
    const target = event.target;
    const username = target.querySelector("#username").value
    const password = target.querySelector("#password").value
    console.log(username, password)
    this.Auth.getUserDetails(username, password).subscribe((data : any)=>{
      if(data.success){
        this.router.navigate(['dashboard'])
        this.Auth.setLoggedInStatus(true)
        // redirection successful
      }else{
        window.alert("Invalid Credentials")
        
       

      }
    })

    

  }

}
