import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';
import {HttpParamsMapper} from '../utils/http-params-mapper.util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly URL_PREFIX = 'http://localhost:8080/rest/shop';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.URL_PREFIX}/products`
    );
  }

  public post(product: Product) {
    const params: HttpParams = HttpParamsMapper.map(product);
    return this.http.post(
      `${this.URL_PREFIX}/product`,
      {},
      {params}
    );
  }
  public delete(id: number) {
    const params: HttpParams = new HttpParams().set('id', id.toString());
    return this.http.delete(
      `${this.URL_PREFIX}/deleteProduct`,
      {params}
    );
  }

}
