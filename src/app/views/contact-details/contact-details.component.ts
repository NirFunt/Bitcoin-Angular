import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  constructor(private userService: UserService, private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  contact: Contact;
  // user: Observable<User>;
  loggedinUser: User;
  subscription: Subscription;

  ngOnInit(): void {
    // console.log('deatils rendering')
    let user = this.userService.getUser();
    if (!user) {
      this.router.navigateByUrl('signup');
      return;
    }
    else {
      // this.user = this.userService.user$;
      this.userService.user$.subscribe(user => {
        this.loggedinUser = user;
        // console.log('contact-details from subscribe ',this.loggedinUser)
      })
    }
    this.subscription = this.route.params.subscribe(async params => {
      const contact = await this.contactService.getContactById(params.id).toPromise()
      this.contact = contact
    })
  }

  coinsTransfer(amount) {
    this.contact.coins += amount;
    this.contactService.saveContact(this.contact);
  }



}
