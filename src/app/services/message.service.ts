import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  getMessages(userId: number): Observable<Message[]> {
    return this.httpClient.get<Message[]>('/api/messages', {
      params: new HttpParams().append('userId', userId + '')
    });
  }

}


export class Message {
  constructor(
    public id: number,
    public source: string,
    public timeStamp: number,
    public content: string
  ) {}
}
