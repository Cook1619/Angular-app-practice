import { Component } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any;
  hasKids: boolean;
  // this makes the numberArray variable expect an array of numbers nothing else
  numberArray: number[];
  // same concept but with strings
  stringArray: string[];
  // can hold any values
  mixedArray: any[];
  // defining each index in the array, after the defined amounts you can have whatever data you want without throwing errors
  myTuple: [string, number, boolean];

  u: undefined;
  n: null;

  // runs automatically when object is instanciated
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age =  30;
    this.address = {
      street: '123 Main St',
      city: 'Mayer',
      state: 'Minnesota'
    };
    this.numberArray = [1, 2, 3];
    this.myTuple = ['hello', 4, true];
    this.u = undefined;
    this.n = null;

    console.log(this.addNumbers(2, 3));
  }

  // sayHello() {
  //   console.log(`Hello ${this.firstName}`);
  // }

  // hasBirthday() {
  //   this.age += 1;
  // }

  addNumbers(num1: number, num2: number): number{
    return num1 + num2;
  }
}
