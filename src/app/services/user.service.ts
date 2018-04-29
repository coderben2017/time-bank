import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<User> {
    const usr: string = sessionStorage.getItem('usr');
    return this.httpClient.get<User>(`/api/user/${usr}`);
  }

}

export class User {
  constructor(
    public id: number,
    public name: string,
    public trueName: string,
    public creditValue: number,
    public domicile: string,
    public phoneNumber: number,
    public idCard: any
  ) {}
}
