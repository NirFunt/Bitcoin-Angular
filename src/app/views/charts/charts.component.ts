import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) { }

  tradeVolume: object[];
  avgBlock$: Observable<Object[]>;
  avgBlock: object[];
  marketPrice: object[];

  tradeVolumeSubscription: Subscription;


  ngOnInit(): void {
    this.getTradeVolume();
    this.getAvgBlock();
    this.getMarketPrice();
  }

  ngOnDestroy(): void {
    this.tradeVolumeSubscription.unsubscribe();
  }

  getTradeVolume() {
    this.tradeVolumeSubscription = this.bitcoinService.getTradeVolume().subscribe(tradeVolume => {
      this.tradeVolume = tradeVolume;
    })
  }

  getAvgBlock() {
    this.avgBlock$ = this.bitcoinService.getAvgBlock();
    this.tradeVolumeSubscription = this.bitcoinService.getAvgBlock().subscribe(avgBlock => {
      this.avgBlock = avgBlock;
    })
  }

  async getMarketPrice() {
    this.bitcoinService.getMarketPrice().subscribe(mp =>
      this.marketPrice = mp)
    //  this.marketPrice = await this.bitcoinService.getMarketPrice().toPromise(); //not working because frist subscribe?
    
  }

}
