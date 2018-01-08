import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  getTasks(userId: number): Observable<Task[]> {
    return this.httpClient.get('/api/tasks', {
      params: new HttpParams().append('userId', userId + '')
    });
  }

  getNotices(userId: number): Observable<Task[]> {
    return this.httpClient.get('/api/tasks/notices', {
      params: new HttpParams().append('userId', userId + '')
    });
  }

}


export class Task {
  constructor(
    public id: number,
    public content: string,
    public completeDegree: number,
    public userId: number
  ) {}
}
