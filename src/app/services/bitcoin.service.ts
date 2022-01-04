import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  // private _bitcoin$ = new BehaviorSubject<Contact[]>([])
  // public _bitcoin$ = this.__bitcoin$.asObservable()

  constructor(private http: HttpClient) { }

  getRate(coins = 'USD') {
    if (localStorage.getItem('coinRate')) {
      console.log('taking coinRate from local storage')
      return of(localStorage.getItem('coinRate'));
    } else {
      console.log('taking coinRate from API')
      return this.http.get(`https://blockchain.info/tobtc?currency=${coins}&value=1`)
        .pipe(
          map(res => {
            localStorage.setItem('coinRate', JSON.stringify(res as number));
            return res;
          }))
    }
  }

  getTradeVolume() {
    if (localStorage.getItem('tradeVolume')) {
      console.log('taking tradeVolume from local storage')
      return of( JSON.parse(localStorage.getItem('tradeVolume')));
    } else {
      console.log('taking tradeVolume from API')
      return this.http.get<{ values: object[] }>(`https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`)
        .pipe(
          map(res => {
            localStorage.setItem('tradeVolume', JSON.stringify(res.values));
            return res.values;
          }))
    }
  }

  getAvgBlock() {
    if (localStorage.getItem('avgBlock')) {
      console.log('taking avgBlock from local storage')
      return of( JSON.parse(localStorage.getItem('avgBlock')));
    } else {
      console.log('taking avgBlock from API')
      return this.http.get<{ values: object[] }>(`https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`)
        .pipe(
          map(res => {
            localStorage.setItem('avgBlock', JSON.stringify(res.values));
            return res.values;
          }))
    }
  }

  getMarketPrice() {
    if (localStorage.getItem('marketPrice')) {
      console.log('taking marketPrice from local storage')
      return of( JSON.parse(localStorage.getItem('marketPrice')));
    } else {
      console.log('taking marketPrice from API')
      return this.http.get<{ values: object[] }>(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
        .pipe(
          map(res => {
            localStorage.setItem('marketPrice', JSON.stringify(res.values));
            return res.values;
          }))
    }
  }



}




