import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CoinService } from 'src/app/Services/coin.service';
import { CoinGrillaItem } from './coin-grilla-datasource';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';
import { ConvertedCoinComponent } from '../converted-coin/converted-coin.component';
import { coin } from 'src/app/Models/coin.model';

@Component({
  selector: 'app-coin-grilla',
  templateUrl: './coin-grilla.component.html',
  styleUrls: ['./coin-grilla.component.css']
})
export class CoinGrillaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CoinGrillaItem>;

  displayedColumns = ['id', 'name', 'symbol', 'price', 'actions'];

  constructor(private service: CoinService,
    public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.LoadTable();
  }

  LoadTable() {
    this.service.getAllCoins().subscribe(res => {
      this.table.dataSource = res;
    },
      error => {
        console.log(":P");
        console.log(error);
      }
    )
  }

  OpenDetailComponent(value: coin) {
    const dialogRef = this.dialog.open(DetailComponent, { width: '540px', data: value });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        localStorage.setItem("id", value.id.toString());
        this.OpenConvertedCoinComponent();
      }
    });
  }

  OpenConvertedCoinComponent() {
    const dialogRef = this.dialog.open(ConvertedCoinComponent, { width: '300px', data: this.table.dataSource });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
