import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlanService {

  usr: string = sessionStorage.getItem('usr');

  constructor(private httpClient: HttpClient) { }

  getAllPlans(): Observable<Plan[]> {
    return this.httpClient.get<Plan[]>('/api/plans');
  }

  getPlan(id: number): Observable<Plan> {
    return this.httpClient.get<Plan>(`/api/plan/${id}`);
  }

  addPlan(type: string, place: string, salary: number, timeStamp: number, pushPerson: string): Observable<any> {
    return this.httpClient.post('/api/plan/add', {
      type: type,
      place: place,
      salary: salary,
      timeStamp: timeStamp,
      pushPerson: pushPerson
    });
  }

  takePlan(planId: number, usr: string): Observable<any> {
    return this.httpClient.post('/api/plan/take', {
      planId: planId,
      usr: usr
    });
  }

  getTakenPlans(): Observable<Plan[]> {
    return this.httpClient.get<Plan[]>(`/api/taken-plans/${this.usr}`);
  }

  getPushedPlans(): Observable<Plan[]> {
    return this.httpClient.get<Plan[]>(`/api/pushed-plans/${this.usr}`)
  }

  finishPlan(id: number): Observable<any> {
    return this.httpClient.post(`/api/finish-plan`, {
      id: id
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
    public phoneNumber: number,
    public isReceived: number,
    public receivePersonId?: number
  ) {}
}
