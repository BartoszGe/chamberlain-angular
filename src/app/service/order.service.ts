import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Order} from '../model/order.model';
import {HttpParamsMapper} from '../utils/http-params-mapper.util';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';
import {ProductSimple} from '../model/product-simple.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly URL_PREFIX = 'http://localhost:8080/rest/order';

  constructor(private http: HttpClient) {
  }

  public post(order: Order) {
    const params: HttpParams = HttpParamsMapper.map(order);
    return this.http.post(
      `${this.URL_PREFIX}/new`,
      {},
      {params}
    );
  }

  public postProduct(productSimple: ProductSimple) {
    const params: HttpParams = HttpParamsMapper.map(productSimple);
    return this.http.post(
      `${this.URL_PREFIX}/fillBasket`,
      {},
      {params}
    );
  }

  public getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(
      `${this.URL_PREFIX}/products`
    );
  }
}
