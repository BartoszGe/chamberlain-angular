import {Component, Input} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductDialogComponent} from '../grocery-store-utils/product-dialog/product-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ProductService} from '../service/product.service';
import {ProductCreationDialogComponent} from './product-creation-dialog/product-creation-dialog.component';

@Component({
  selector: 'app-grocery-store-management',
  templateUrl: './grocery-store-management.component.html',
  styleUrls: ['./grocery-store-management.component.scss']
})
export class GroceryStoreManagementComponent {

  @Input() marketProducts: Product[];
  marketProductsFiltered: Product[] = [];

  constructor(private dialog: MatDialog,
              private productStoreService: ProductService) {
  }

  showProductInfo(product: Product) {
    this.dialog.open(ProductDialogComponent, {data: {dialogProduct: product}});
  }

  filterProduct(product: string) {
    if (this.marketProductsFiltered.length === 0) {
      this.marketProductsFiltered = this.marketProducts;
    } else {
      this.marketProducts = this.marketProductsFiltered;
    }
    this.marketProducts = this.marketProductsFiltered.filter(pr => pr.name.includes(product));
  }

  removeFromMarket(id: number) {


  }

  createProductDialog() {
    const dialogRef = this.dialog.open(ProductCreationDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.productStoreService.getAll().subscribe(response => {
        this.marketProductsFiltered = response;
      });
    });
  }
}
