import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { coin } from 'src/app/Models/coin.model';
import { CoinService } from 'src/app/Services/coin.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  coin: coin = { id: 0, name: '', price: 0, symbol: '', amount: 0 };

  @Output() submitClicked = new EventEmitter<any>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: coin,
    public dialogRef: MatDialogRef<DetailComponent>,
    public service: CoinService,
  ) {
  }

  ngOnInit(): void {
    this.LoadData(this.data);
  }

  LoadData(value: coin) {
    this.coin.id = value.id;
    this.coin.name = value.name;
    this.coin.symbol = value.symbol;
    this.coin.price = value.price;
  }

  GetAmount() {
    let amount = Number((<HTMLInputElement>document.getElementById("amount")).value);
    if( isNaN(amount) ) {
      alert("la cantidad introducida debe ser un numero");
      return;
    }
    localStorage.setItem("amount", amount.toString());
    this.submitClicked.emit();
    this.dialogRef.close()
  }

}
