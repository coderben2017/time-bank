import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComplaintService {

  constructor(private httpClient: HttpClient) {}

  pushComplaint( content: string, phoneNumber: number): Observable<any> {
    return this.httpClient.post('/api/complaint', {
      content: content,
      phoneNumber: phoneNumber
    });
  }

}
