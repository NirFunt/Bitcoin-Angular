import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(private contactService: ContactService, private route: ActivatedRoute,private router: Router) { }

  contact: Contact;
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(async params => {
      const contact = (params.id)? await this.contactService.getContactById(params.id).toPromise() : this.contactService.getEmptyContact() as Contact;
      this.contact = contact
    })
  }

  onSaveContact() {
    // console.log(this.contact)
    this.contactService.saveContact(this.contact);
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}





 
    





