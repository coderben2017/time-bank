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
