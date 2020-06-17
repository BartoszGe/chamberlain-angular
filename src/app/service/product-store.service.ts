import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {
  private readonly URL_PREFIX = 'http://localhost:8080/rest/shop';

  constructor(private http: HttpClient) {
  }

  public get(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.URL_PREFIX}/products`
    );
  }
}
