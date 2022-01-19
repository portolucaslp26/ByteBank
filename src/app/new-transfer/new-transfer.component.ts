import { Component, Output, EventEmitter } from "@angular/core";
import { TransferService } from "../services/transfer.service";
import { Transfer } from '../models/transfer.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-transfer',
  templateUrl: 'new-transfer.component.html',
  styleUrls: ['new-transfer.component.scss'],
})
export class NewTransferComponent {

  @Output() toTransfer = new EventEmitter<any>();

  constructor(private service: TransferService, private router: Router) {}

  value: Number;
  destiny: Number;

  transfer() {
    var valueToEmit: Transfer = { value: this.value, destiny: this.destiny };

    this.service.addTransfer(valueToEmit).subscribe(
      (result) => {
      console.log(result)
      this.router.navigateByUrl('extract');
    },
    (error) => console.error(error)
    );
  }
}
