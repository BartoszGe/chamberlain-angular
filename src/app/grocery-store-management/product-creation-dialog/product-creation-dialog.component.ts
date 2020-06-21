import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {ProductRequestService} from '../../service/product-request.service';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product-request',
  templateUrl: './product-creation-dialog.component.html',
  styleUrls: ['./product-creation-dialog.component.scss']
})
export class ProductCreationDialogComponent {

  @ViewChild('selectpicker') selectPicker: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<ProductCreationDialogComponent>,
    private productService: ProductService) {
  }

  addNewProduct(name: string, type: string, price: string, measureType: string, description: string) {
    this.productService.post(new Product(null, name, 0, type, Number(price), measureType, description)).subscribe();
    console.log('Product created');
    this.dialogRef.close();
  }
}
