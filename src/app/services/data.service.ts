import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  constructor() {
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
   }

   getUsers(): User[] {
     console.log('Fetching from the service folder!!')
    return this.users;
   }

   adduser(user: User) {
    this.users.unshift(user);
   }
}
