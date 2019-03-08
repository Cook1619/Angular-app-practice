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
  loaded: boolean = false;
  enableAdd: boolean = false;

  constructor() { }

  ngOnInit() {
   
      this.users = [
        {
          firstName: 'Matt',
          lastName: 'Cook',
          age: 32,
          address: {
            street: '50 Main st',
            city: 'Mayer',
            state: 'MN'
          },
          image: 'http://lorempixel.com/600/600/people/6'
        },
        {
          firstName: 'Danelle',
          lastName: 'Cook',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Mayer',
            state: 'MN'
          },
          image: 'http://lorempixel.com/600/600/people/8'
        },
        {
          firstName: 'Mike',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Montrose',
            state: 'MN'
          },
          image: 'http://lorempixel.com/600/600/people/9'
        }
      ];

      this.loaded = true;

      // this.addUser({
      //   firstName: 'David',
      //   lastName: 'Jackson'
      // });
  }

  addUser(user: User) {
    this.users.push(user);
  }
  
}
