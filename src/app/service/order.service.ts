import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Order} from '../model/order.model';
import {HttpParamsMapper} from '../utils/http-params-mapper.util';

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
}
