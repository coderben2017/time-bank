import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlanService {

  constructor(private httpClient: HttpClient) { }

  getAllPlans(): Observable<Plan[]> {
    return this.httpClient.get('/api/plans');
  }

  getPlan(id: number): Observable<Plan> {
    return this.httpClient.get(`/api/plan/${id}`);
  }

  addPlan(text: string, timeStamp: number): Observable<boolean> {
    return this.httpClient.post('/api/plan/add', {
      text: text,
      timeStamp: timeStamp
    });
  }

}



export class Plan {
  constructor(
    public id: number,
    public name: string,
    public timeStamp: number,
    public place: string,
    public salary: number,
    public detail: string
  ) {}
}
