import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OwlDateTimeComponent} from 'ng-pick-datetime';
import {Order} from '../../model/order.model';
import {OrderService} from '../../service/order.service';

export interface DialogData {
  costs: number;
}

@Component({
  selector: 'app-shop-finalization-dialog',
  templateUrl: './shop-finalization-dialog.component.html',
  styleUrls: ['./shop-finalization-dialog.component.scss']
})
export class ShopFinalizationDialogComponent {

  costsWithTip: number;
  whenFinalized = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<ShopFinalizationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private orderService: OrderService) {
    this.costsWithTip = data.costs;
  }

  addToCosts(tip: string) {
    this.costsWithTip = Number((+this.data.costs.valueOf() + +tip).toFixed(2));
  }

  submitShopping(deliveryPlace: string, deliveryDate: string) {
    const order = new Order(this.costsWithTip, deliveryDate, deliveryPlace);
    this.orderService.post(order).subscribe();
    console.log('Sanded to: ' + order.deliveryPlace);
    this.whenFinalized.emit();
    this.dialogRef.close();
  }
}
