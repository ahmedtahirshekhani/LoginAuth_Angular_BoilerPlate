import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  quote = "Loading..."
  username = "undefined"

  constructor(private user:UserService, private router: Router) { }

  ngOnInit(): void {

    this.user.getSomeData().subscribe(data => {
      this.quote = data.quote
      this.username = data.username
    })

  }

  logoutUser(){
    this.user.logout().subscribe((data:any) => {
      if(data.success){
        this.router.navigate([''])
      }else{
        console.log("Error logging out")
      }
    })
  }

  updateQuote(event:any){
    const value= event.target.parentNode.querySelector('#myQuote').value
    this.user.updateQuote(value).subscribe((data:any)=>{
      if(data.success){
        alert("Your quote was updated")
      }else{
        alert("Some problem")
      }
    })
  }

}
