import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  @ViewChild('userForm')form: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
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

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    }else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.adduser(value);

      this.form.reset();
    }
  }

}
