import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from '../models/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private trasferList: any[];
  private url = 'http://localhost:3000/transfers';

  constructor(private httpClient: HttpClient) {
    this.trasferList = [];
  }

  get transfers() {
    return this.trasferList;
  }

  allTransfers(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  addTransfer(transfer: any): Observable<Transfer>{
    this.hydrate(transfer)
    return this.httpClient.post<Transfer>(this.url, transfer); 
  }

  private hydrate(transfer:any){
    transfer.date = new Date();
  }
}
