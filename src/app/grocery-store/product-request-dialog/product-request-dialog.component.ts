import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {ProductRequestService} from '../../service/product-request.service';

@Component({
  selector: 'app-product-request',
  templateUrl: './product-request-dialog.component.html',
  styleUrls: ['./product-request-dialog.component.scss']
})
export class ProductRequestDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ProductRequestDialogComponent>,
    private productRequestService: ProductRequestService) {
  }

  sendProductRequest(productName: string) {

    const requestID = this.productRequestService.post(productName).subscribe();
    console.log('request have id: ' + requestID);
    this.dialogRef.close();
  }
}
