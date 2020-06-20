import {Component, Inject, OnInit} from '@angular/core';
import {ProductSimple} from '../../model/product-simple.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../model/product.model';

export interface DialogData {
  products: Product[];
}

@Component({
  selector: 'app-delivery-description-dialog',
  templateUrl: './delivery-description-dialog.component.html',
  styleUrls: ['./delivery-description-dialog.component.scss']
})
export class DeliveryDescriptionDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeliveryDescriptionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }


}
