import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../model/order.model';
import {OrderService} from '../service/order.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DeliveryDescriptionDialogComponent} from './delivery-description-dialog/delivery-description-dialog.component';
import {DeliveryFinalizationDialogComponent} from './delivery-finalization-dialog/delivery-finalization-dialog.component';
import {ProductSimple} from '../model/product-simple.model';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-grocery-store-courier',
  templateUrl: './grocery-store-courier.component.html',
  styleUrls: ['./grocery-store-courier.component.scss']
})
export class GroceryStoreCourierComponent {

  @Output() changedOrders = new EventEmitter<Order[]>();
  @Input() orders: Order[];


  constructor(private dialog: MatDialog,
              private orderService: OrderService,
              private productService: ProductService) {
  }

  showDeliveryDescriptionDialog(id: number) {
    this.productService.getByOrderId(id).subscribe(response =>
      this.dialog.open(DeliveryDescriptionDialogComponent, {data: {products: response}})
    );
  }

  showDeliveryFinalizationDialog(id: number) {
    const dialogRef = this.dialog.open(DeliveryFinalizationDialogComponent, {data: {orderId: id}});
    dialogRef.afterClosed().subscribe(() =>
      this.refreshOrders());
  }

  private refreshOrders() {
    console.log('orders refreshed');
    this.orderService.getAll().subscribe(response => this.orders = response);
  }

}
