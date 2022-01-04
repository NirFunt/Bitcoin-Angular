import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedinUser: User = null;
  private _user$ = new BehaviorSubject<User>(this.loggedinUser)
  public user$ = this._user$.asObservable()

  constructor() {
  }

  signup(username) {
    let user = JSON.parse(localStorage.getItem(username));
    if (user) {
      this.loggedinUser = user;
    } else {
      user = {
        _id: this.makeId(),
        username: username,
        email: username + "@gmail.com",
        phone: "00000000",
        coins: 100,
        moves: [],
      }
      localStorage.setItem(username, JSON.stringify(user));
      this.loggedinUser = user;
    }
    this._user$.next(this.loggedinUser)
  }

  getUser() {
    // this._user$.next(this.loggedinUser)
    return this.loggedinUser;
  }

  addMove(contact, amount) {
    console.log(amount)
    this.loggedinUser.coins -= amount;
    this.loggedinUser.moves.push({ toId: contact._id, to: contact.name, at: Date.now(), amount: amount });
    localStorage.setItem(this.loggedinUser.username, JSON.stringify(this.loggedinUser));
    this._user$.next(this.loggedinUser);
  }

  makeId(length = 5) {
    var txt = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }



}



