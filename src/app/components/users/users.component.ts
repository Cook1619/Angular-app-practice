import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 32,
        address: {
          street: '123 Main Street',
          city: 'Mayer',
          state: 'MN'
        },
        image: 'http://lorempixel.com/600/600/people/3'
      },
      {
        firstName: 'Matt',
        lastName: 'Cook',
        age: 32,
        address: {
          street: '123 Pinecone Street',
          city: 'Mayer',
          state: 'MN'
        },
        image: 'http://lorempixel.com/600/600/people/2'
      },
      {
        firstName: 'Jim',
        lastName: 'Bob',
        age: 32,
        address: {
          street: '123 Hillbilly Street',
          city: 'Mayer',
          state: 'MN'
        },
        image: 'http://lorempixel.com/600/600/people/1'
      }
    ];

    this.addUser({
      firstName: 'David',
      lastName: 'Bo',
      age: 31,
    })
  }

    addUser(user: User) {
      this.users.push(user);
    }
}
