import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';
import {ProductRequest} from '../model/product-request.model';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {
  private readonly URL_PREFIX = 'http://localhost:8080/rest/shop';

  constructor(private http: HttpClient) {
  }

  public post(productName: string) {

    return this.http.post(
      `${this.URL_PREFIX}/product?name=` + productName,
      ''
    );
  }
}
