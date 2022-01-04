import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  // @Input() loggedinUser: User;
  @Input() contact: Contact;

  loggedinUser: User;
  constructor(private userService: UserService) { }

  contactMoves: Move[];

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      this.loggedinUser = user;
      // console.log('move-list-rendering')
      if (this.contact) this.contactMoves = this.loggedinUser.moves.filter(move => move.toId === this.contact._id);
      else this.contactMoves = this.loggedinUser.moves.slice(this.loggedinUser.moves.length - 3, this.loggedinUser.moves.length);
    })
  }

  // can I use getters with uses loggedinUser props and calculate cotactMoves all the time, will the props
  // make the getters start again? becayse ngOnInit() runs only once, and wont rerender.
  // this is instead of using the listening to user service subsribe

  formatDate(date) {
    date = new Date(date).toString();
    let arr = date.split(' ');
    return `${arr[2]} ${arr[1]} ${arr[3]} ${arr[4]}`
  }
}









