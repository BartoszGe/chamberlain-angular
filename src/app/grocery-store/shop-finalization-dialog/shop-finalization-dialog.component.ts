import {Component, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  fullPickerInput: {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'};


  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private orderService: OrderService) {
    this.costsWithTip = data.costs;
  }

  addToCosts(tip: string) {
    this.costsWithTip = Number((+this.data.costs.valueOf() + +tip).toFixed(2));
  }

  submitShopping(deliveryPlace: string, deliveryDate: string) {
    console.log(deliveryDate);
    const order = new Order(this.costsWithTip, deliveryDate, deliveryPlace);
    this.orderService.post(order).subscribe();
    console.log('sended to: ' + order.deliveryPlace);
  }
}
