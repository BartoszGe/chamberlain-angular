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

    this.productRequestService.post(productName).subscribe(response =>
      console.log('request have id: ' + response)
    );
    this.dialogRef.close();
  }
}
