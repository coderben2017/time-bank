import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(usr: string, psw: string): Observable<any> {
    return this.httpClient.post('/api/login', {
      'username': usr,
      'password': psw
    });
  }

}
