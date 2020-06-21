import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/product.model';
import {MatDialog} from '@angular/material/dialog';
import {ProductDialogComponent} from '../grocery-store-utils/product-dialog/product-dialog.component';
import {ProductRequestDialogComponent} from './product-request-dialog/product-request-dialog.component';
import {ShopFinalizationDialogComponent} from './shop-finalization-dialog/shop-finalization-dialog.component';
import {Order} from '../model/order.model';
import {OrderService} from '../service/order.service';
import {ProductSimple} from '../model/product-simple.model';

@Component({
  selector: 'app-grocery-store',
  templateUrl: './grocery-store.component.html',
  styleUrls: ['./grocery-store.component.scss']
})
export class GroceryStoreComponent {

  @Output() changedOrders = new EventEmitter<Order[]>();
  @Input() marketProducts: Product[];
  basketProducts: Product[] = [];
  products: Product[] = [];
  productSimples: ProductSimple[] = [];

  constructor(private dialog: MatDialog,
              private orderService: OrderService) {
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
    this.createProductSimples();
    const dialogRef = this.dialog.open(ShopFinalizationDialogComponent,
      {
        data:
          {
            costs: this.measureProductsCost(),
            productSimples: this.productSimples
          }
      });

    dialogRef.afterClosed().subscribe(() => {
      if (dialogRef.componentInstance.ifFinalized) {
        this.basketProducts = [];
        this.productSimples = [];
        this.orderService.getAll().subscribe(response => this.changedOrders.emit(response));
      }
    });
  }

  private measureProductsCost() {
    let costs = 0;
    this.basketProducts.forEach(product => costs += product.price);
    console.log(costs);
    return costs.toFixed(2);
  }

  private createProductSimples() {
    this.basketProducts.map(product => this.productSimples.push(new ProductSimple(product.id, product.amount, null)));
  }
}
