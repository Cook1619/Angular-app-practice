import { Component } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  firstName = 'John';
  lastName = 'Doe';
  age = 30;
  // runs automatically when object is instanciated
  constructor() {
    this.sayHello();
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }
}
