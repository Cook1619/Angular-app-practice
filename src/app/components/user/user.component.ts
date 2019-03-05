import { Component } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  user: User;

  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 32,
      address: {
        street: '123 Main Street',
        city: 'Mayer',
        state: 'MN'
      }
    };
  }
}

