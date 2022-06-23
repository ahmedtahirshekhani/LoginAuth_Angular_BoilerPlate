import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(event: any){
    event.preventDefault();
    const target = event.target;
    const error = []
    const username = target.querySelector("#username").value
    const password = target.querySelector("#password").value
    const cpassword = target.querySelector("#cnfrmPassword").value
    if(password != cpassword){
      error.push("Password Not Match")
    }

    if(error.length == 0){
      this.auth.registerUser(username, password).subscribe(data =>{
        if(data.success){
          this.auth.setLoggedInStatus(true);
          this.router.navigate(['dashboard'])

        }else{
          console.log(data.message)
        }
      })
    }
    console.log(error)
    
  }

}
