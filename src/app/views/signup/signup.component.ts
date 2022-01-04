import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private router: Router) { }
  username :string;
  user :User;

  ngOnInit(): void {
    // this.userService.signup('bob');
  }

  setUsername() {
    console.log(this.username)
  }

  signupUser() {
    this.userService.signup(this.username);
    this.router.navigateByUrl('')
  }
}




