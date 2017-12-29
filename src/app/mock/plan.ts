import { Plan } from '../services/plan.service';

const plans: Plan[] = [
  new Plan(1, '6号下午5点航天幼儿园求帮忙接孩子放学', 1512550800000, '航天幼儿园（科学路64号）',
    5, 13729341381),
  new Plan(2, '18号上午9点中科院小区求帮忙搬家', 1512550800000, '中科院小区', 12, 13729341382),
  new Plan(3, '帮忙搬家', 1512550800000, '海淀黄庄', 6, 13729341383),
  new Plan(4, '代缴水电费', 1512550800000, '科育社区99号楼', 2, 13729341384),
];

export function getAllPlans(): Plan[] {
  return plans;
}

export function getPlan(id: number): Plan {
  return plans.find(plan => plan.id === id);
}
