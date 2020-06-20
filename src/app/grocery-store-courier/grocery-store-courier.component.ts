import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../model/order.model';
import {OrderService} from '../service/order.service';

@Component({
  selector: 'app-grocery-store-courier',
  templateUrl: './grocery-store-courier.component.html',
  styleUrls: ['./grocery-store-courier.component.scss']
})
export class GroceryStoreCourierComponent {

  @Output() changedOrders = new EventEmitter<Order[]>();
  @Input() orders: Order[];

  constructor(private orderService: OrderService) {
  }

  refreshOrders() {
    this.orderService.getAll().subscribe(response => this.orders = response);
  }

  writeOrderProblem() {

  }
}
