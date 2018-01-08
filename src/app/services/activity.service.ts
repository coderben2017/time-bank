import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this.httpClient.get('/api/activities');
  }

}

export class Activity {
  constructor(
    public id: number,
    public name: string,
    public content: string,
    public timeStamp: number
  ) {}
}
