import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: User[] = [{name:"Biruk",password:"7410"}];

  constructor() { }

  getUser(name: string) {
    return this.users.find(user => user.name.toLowerCase == name.toLowerCase);
  }
}
