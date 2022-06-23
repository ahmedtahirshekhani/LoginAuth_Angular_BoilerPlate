import { Component } from '@angular/core';

function log(name: any, target: any, descriptor: any){
  const getFunc = descriptor.value;
  descriptor.value = function(){

    console.log("Tahir")
  }
  return descriptor
  //console.log("Ahmed")
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  // constructor(){
  //   this.aSimpleMethod();
  //   this.aSimpleMethod2();
  // }
  // @log
  // aSimpleMethod(){
  //   console.log("hey there!")
  // }
  
  // @log
  // aSimpleMethod2(){
  //   console.log("hey there!")
  // }
  
}
