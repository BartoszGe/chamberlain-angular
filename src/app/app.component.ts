import {Component, OnInit} from '@angular/core';
import {ProductService} from './service/product.service';
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

  constructor(private productStoreService: ProductService) {
  }

  ngOnInit(): void {
    this.selectedPage = 'index';
    this.productStoreService
      .getAll()
      .subscribe(products => this.products = products);
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
}
