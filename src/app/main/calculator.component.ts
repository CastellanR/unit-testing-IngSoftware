import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  divide(num1, num2){
    if( num2 == 0 ){
      return undefined;
    }
   return num1 / num2;
  }

  plus(num1, num2){
    return num1 + num2;
  }
}
