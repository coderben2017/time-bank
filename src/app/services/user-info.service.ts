import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserInfoService {

  constructor(private httpClient: HttpClient) { }

  getUserInfo(userId: number): Observable<UserInfo> {
    return this.httpClient.get('/api/userInfo', {
      params: new HttpParams().append('userId', userId + '')
    });
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
