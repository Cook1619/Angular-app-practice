import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName: 'Matt',
        lastName: 'Cook',
        email: 'cook6537@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Danelle',
        lastName: 'Cook',
        email: 'cook6537@gmail.com',
        isActive: false,
        registered: new Date('05/02/2018 02:30:00'),
        hide: true
      },
      {
        firstName: 'Mike',
        lastName: 'Williams',
        email: 'cook6537@gmail.com',
        isActive: true,
        registered: new Date('08/02/2018 11:10:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }

  // addUser() {
  //   //Adds is active by default to every submission
  //   this.user.isActive =  true;
  //   //Gives Each user the date value addded to when they joined
  //   this.user.registered = new Date();
  //   //Puts the value to the beginning of the array
  //   this.users.unshift(this.user);
  //   //After adding the user to the array, it empties the form after it submits
  //   this.user = {
  //     firstName: '',
  //   lastName: '',
  //   email: ''
  //   }
  // }

  onSubmit(e) {
    console.log("submitted");
    e.preventDefault();
  }

}
