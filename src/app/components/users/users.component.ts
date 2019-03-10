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
  enableAdd: boolean = true;
  showUserForm: boolean = false;

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
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
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
        isActive: false,
        registered: new Date('05/02/2018 02:30:00'),
        hide: true
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
        isActive: true,
        registered: new Date('08/02/2018 11:10:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  // toggleHide(user: User) {
  //   user.hide =  !user.hide;
  // }
  onSubmit(e) {
    
    console.log("submitted");
    e.preventDefault();
  }

}
