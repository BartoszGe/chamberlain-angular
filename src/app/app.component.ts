import {Component, OnInit} from '@angular/core';
import {ProductService} from './service/product.service';
import {Product} from './model/product.model';
import {User} from './model/user.model';
import {Order} from './model/order.model';
import {OrderService} from './service/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedPage: string;
  user: User;
  products: Product[];
  orders: Order[];

  constructor(private productStoreService: ProductService,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.selectedPage = 'index';
    this.productStoreService
      .getAll()
      .subscribe(products => this.products = products);
    this.orderService
      .getAll()
      .subscribe(orders => this.orders = orders);
  }

  moveTo(page: string) {
    if (this.user) {
      this.selectedPage = page;
    }
  }

  saveUser(user: User) {
    if (user) {
      this.user = user;
    }
  }

  updateProducts(products: Product[]) {
    this.products = products;
  }

  updateOrders(orders: Order[]) {
    this.orders = orders;
  }
}
