import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../model/product.model';

export interface DialogData {
  dialogProduct: Product;
}

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

}
