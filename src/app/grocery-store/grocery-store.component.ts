import {Component, Input} from '@angular/core';
import {Product} from '../model/product.model';
import {MatDialog} from '@angular/material/dialog';
import {ProductDialogComponent} from './product-dialog/product-dialog.component';
import {ProductStoreService} from '../service/product-store.service';

@Component({
  selector: 'app-grocery-store',
  templateUrl: './grocery-store.component.html',
  styleUrls: ['./grocery-store.component.scss']
})
export class GroceryStoreComponent {

  @Input() marketProducts: Product[];

  constructor(private dialog: MatDialog) {
  }

  basketProducts: Product[] = [];

  addToBasket(id: number) {
    const product = this.marketProducts.find(value => value.id === id);
    if (!this.basketProducts.includes(product)) {
      this.basketProducts.push(product);
    }
    this.basketProducts.forEach(value => value.id === id ? value.amount++ : '');
  }

  removeFromBasket(id: number) {
    this.basketProducts.forEach(value => value.id === id ? value.amount-- : '');
    this.basketProducts = this.basketProducts.filter(value => value.amount > 0);
  }

  showProductInfo(product: Product) {
    this.dialog.open(ProductDialogComponent, {data: {dialogProduct: product}});
  }
}
