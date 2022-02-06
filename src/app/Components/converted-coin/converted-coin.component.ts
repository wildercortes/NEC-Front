import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { coin } from 'src/app/Models/coin.model';
import { CoinService } from 'src/app/Services/coin.service';

@Component({
  selector: 'app-converted-coin',
  templateUrl: './converted-coin.component.html',
  styleUrls: ['./converted-coin.component.css']
})
export class ConvertedCoinComponent implements OnInit {

  name: string = '';
  amount: number = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: coin[],
    public dialogRef: MatDialogRef<ConvertedCoinComponent>,
    public service: CoinService,
  ) {
  }

  ngOnInit(): void {
    let id = localStorage.getItem("id");
    let amountinput = localStorage.getItem("amount");
    let selectedCoin = this.data.filter((x => x.id.toString() == id));

    this.name = selectedCoin[0].name;
    this.amount = Number(amountinput);

    let usdAmount = Number(amountinput) * selectedCoin[0].price;

   var contador = 0;
    for (let element of this.data) {
      this.data[contador].amount = usdAmount / element.price;
      contador++;    
    }
  }

}
