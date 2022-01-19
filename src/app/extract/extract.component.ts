import { Component, OnInit } from '@angular/core';
import { TransferService } from '../services/transfer.service';
import { Transfer } from '../models/transfer.model';


@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  Transfers: any[];

  constructor(private service: TransferService) { }

  ngOnInit(): void {
    this.service.allTransfers().subscribe((Transfers: Transfer[]) => {
      console.table(Transfers)
      this.Transfers = Transfers;
    })
  }
}
