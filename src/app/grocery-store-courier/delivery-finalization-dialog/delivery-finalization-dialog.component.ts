import {Component, Inject, OnInit} from '@angular/core';
import {OrderService} from '../../service/order.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  orderId: number;
}


@Component({
  selector: 'app-delivery-finalization-dialog',
  templateUrl: './delivery-finalization-dialog.component.html',
  styleUrls: ['./delivery-finalization-dialog.component.scss']
})
export class DeliveryFinalizationDialogComponent {


  constructor(public dialogRef: MatDialogRef<DeliveryFinalizationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private orderService: OrderService) {
  }

  finalizeOrder(deliveryProblem: string) {
    this.orderService.patchOrder(this.data.orderId, deliveryProblem).subscribe();
    this.dialogRef.close();
  }
}
