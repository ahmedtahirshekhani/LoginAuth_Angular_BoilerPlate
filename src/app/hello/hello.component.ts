import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  i = 0;
  text="app"
  disableButton = false;

  records: any[] = []
  constructor(private myFirstService : RecordsService) {

    console.log("const")
  }

  updateInput(e: any){
    this.text = e.target.value;
  }
  doSome(){
    this.disableButton = !this.disableButton;
    console.log(`Called doSome ${this.i++} times`)
  }


  ngOnInit(): void {
    
    this.myFirstService.getData().subscribe((data: any)=>{
      this.records = data.obj;
      console.log("Data",data.obj)
    })
    console.log("ngOnit")
  }

}
