import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OwlDateTimeComponent} from 'ng-pick-datetime';
import {Order} from '../../model/order.model';
import {OrderService} from '../../service/order.service';
import {Product} from '../../model/product.model';
import {ProductSimple} from '../../model/product-simple.model';

export interface DialogData {
  costs: number;
  productSimples: ProductSimple[];
}

@Component({
  selector: 'app-shop-finalization-dialog',
  templateUrl: './shop-finalization-dialog.component.html',
  styleUrls: ['./shop-finalization-dialog.component.scss']
})
export class ShopFinalizationDialogComponent {

  costsWithTip: number;
  ifFinalized = false;

  constructor(public dialogRef: MatDialogRef<ShopFinalizationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private orderService: OrderService) {
    this.costsWithTip = data.costs;
  }

  addToCosts(tip: string) {
    this.costsWithTip = Number((+this.data.costs.valueOf() + +tip).toFixed(2));
  }

  submitShopping(deliveryPlace: string, deliveryDate: string) {
    const order = new Order(this.costsWithTip, deliveryDate, deliveryPlace, null);
    this.orderService.post(order).subscribe(
      response =>
        this.data.productSimples.forEach(productSimple =>
          this.orderService.postProduct(new ProductSimple(productSimple.id, productSimple.amount, Number(response))).subscribe()
        )
    );
    console.log('Sanded to: ' + order.deliveryPlace);
    this.ifFinalized = true;
    this.dialogRef.close();
  }
}
