import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpParamsMapper} from '../utils/http-params-mapper.util';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly URL_PREFIX = 'http://localhost:8080/rest';

  constructor(private http: HttpClient) {
  }

  public get(login: string): Observable<User> {
    const params: HttpParams = new HttpParams().set('login', login);
    return this.http.get<User>(
      `${this.URL_PREFIX}/user`,
      {params}
    );
  }
}
