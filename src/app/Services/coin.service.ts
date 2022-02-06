import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(
    private httpClient: HttpClient) { }

  getAllCoins() {
    return this.httpClient.get<any>(`https://localhost:44337/api/CoinMarketCap`);
  }
}
