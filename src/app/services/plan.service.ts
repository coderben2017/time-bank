import { Injectable } from '@angular/core';

@Injectable()
export class PlanService {

  constructor() { }

  getAllPlans(): Plan[] {
    return [
      new Plan(1, '6号下午5点航天幼儿园求帮忙接孩子放学', 1512550800000, '航天幼儿园（科学路64号）',
        5, '5点准时到，到了直接联系孩子的老师。孩子比较胆小，所以希望能送到家门口，交给他奶奶。'),
      new Plan(2, '18号上午9点中科院小区求帮忙搬家', 1513558800000, '中科院小区',
        12, '准时来就行，谢谢')
    ];
  }

  getPlan(id: number): Plan {
    return this.getAllPlans().find((plan) => plan.id === id);
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
