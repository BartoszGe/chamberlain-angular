import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {MatDialog} from '@angular/material/dialog';
import {ProductDialogComponent} from '../grocery-store-utils/product-dialog/product-dialog.component';
import {ProductRequestDialogComponent} from './product-request-dialog/product-request-dialog.component';
import {ShopFinalizationDialogComponent} from './shop-finalization-dialog/shop-finalization-dialog.component';

@Component({
  selector: 'app-grocery-store',
  templateUrl: './grocery-store.component.html',
  styleUrls: ['./grocery-store.component.scss']
})
export class GroceryStoreComponent {

  @Input() marketProducts: Product[];
  basketProducts: Product[] = [];
  products: Product[] = [];

  constructor(private dialog: MatDialog) {
  }

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

  filterProduct(product: string) {
    if (this.products.length === 0) {
      this.products = this.marketProducts;
    } else {
      this.marketProducts = this.products;
    }
    this.marketProducts = this.products.filter(pr => pr.name.includes(product));
  }

  requestNewProduct() {
    this.dialog.open(ProductRequestDialogComponent);
  }

  finalizeShopping() {
    const dialogRef = this.dialog.open(ShopFinalizationDialogComponent, {data: {costs: this.measureProductsCost()}});

    dialogRef.afterClosed().subscribe(() => {
      if (dialogRef.componentInstance.ifFinalized) {
        this.basketProducts = [];
      }
    });
  }

  private measureProductsCost() {
    let costs = 0;
    this.basketProducts.forEach(product => costs += product.price);
    console.log(costs);
    return costs.toFixed(2);
  }
}
