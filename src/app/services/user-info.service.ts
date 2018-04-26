import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserInfoService {

  constructor(private httpClient: HttpClient) { }

  getUserInfo(usr: string): Observable<UserInfo> {
    return this.httpClient.get(`/api/userInfo/${usr}`);
  }

}

export class UserInfo {
  constructor(
    public id: number,
    public name: string,
    public autograph: string,
    public timeStamp: number,
    public photoId: number
  ) {}
}
