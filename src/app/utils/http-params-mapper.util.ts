import {HttpParams} from '@angular/common/http';
import {CustomQueryEncoder} from './custom-query-encoder.util';

export class HttpParamsMapper {
  static map(criteria: any): HttpParams {
    let httpParams = new HttpParams({encoder: new CustomQueryEncoder()});
    Object.entries(criteria)
      .filter(([k, v]) => v !== null && v !== undefined)
      .forEach(([k, v]) => (httpParams = httpParams.set(k, v.toString())));
    return httpParams;
  }
}
