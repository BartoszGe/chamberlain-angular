import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpParamsMapper} from '../utils/http-params-mapper.util';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {
  private readonly URL_PREFIX = 'http://localhost:8080/rest/shop';

  constructor(private http: HttpClient) {
  }

  public post(productName: string) {
    const params: HttpParams = new HttpParams().set('name', productName);
    return this.http.post(
      `${this.URL_PREFIX}/productRequest`,
      {},
      {params}
    );
  }
}
