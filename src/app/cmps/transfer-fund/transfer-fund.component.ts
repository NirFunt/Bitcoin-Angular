import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
@Input() contact :Contact;
@Output() coinsTransfer = new EventEmitter;
  constructor(private userService:UserService) { }
  amount: number;

  ngOnInit(): void {
  }

  onTransfer() {
    this.userService.addMove(this.contact, this.amount);
    this.coinsTransfer.emit(this.amount);
  }

}



