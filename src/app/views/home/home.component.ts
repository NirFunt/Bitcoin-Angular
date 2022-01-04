import { Component, OnInit } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private userService:UserService, private bitcoinService:BitcoinService, private router: Router) { }

  user: User;
  bitcoinRate : number;
  // user$ : Observable<User>;
  // userSubscription : Subscription;
  bitcoinSubscription : Subscription;
  


  ngOnInit(): void {
    // this.user$ = this.userService.user$;
    // this.userSubscription = this.userService.user$.subscribe(user => {}
      this.getBitcoinRate();
      let user = this.userService.getUser();
      if (!user) {
        this.router.navigateByUrl('signup');
        return;
      } 
      else {
        this.user = user;
      }
  }

  ngOnDestroy(): void {
    // this.userSubscription.unsubscribe()
    this.bitcoinSubscription.unsubscribe()
  }


  getBitcoinRate () {
    this.bitcoinSubscription = this.bitcoinService.getRate().subscribe(rate => {
      this.bitcoinRate = rate as number;
    })
  }


}




