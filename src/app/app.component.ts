import {Component, OnInit} from '@angular/core';
import {ProductStoreService} from './service/product-store.service';
import {Product} from './model/product.model';
import {User} from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedPage: string;
  user: User;
  products: Product[];

  constructor(private productStoreService: ProductStoreService) {
  }

  ngOnInit(): void {
    this.selectedPage = 'index';
    this.productStoreService
      .get()
      .subscribe(products => this.products = products);
  }

  moveTo(page: string) {
    this.selectedPage = page;
  }

  saveUser(user: User) {
    this.user = user;
  }
}
