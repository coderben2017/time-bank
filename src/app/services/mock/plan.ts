import { Plan } from '../plan.service';

const plans: Plan[] = [
  new Plan(1, '6号下午5点航天幼儿园求帮忙接孩子放学', 1512550800000, '航天幼儿园（科学路64号）',
    5, '5点准时到，到了直接联系孩子的老师。孩子比较胆小，所以希望能送到家门口，交给他奶奶。'),
  new Plan(2, '18号上午9点中科院小区求帮忙搬家', 1512550800000, '中科院小区', 12, '准时来就行，谢谢~'),
  new Plan(3, '帮忙搬家', 1512550800000, '海淀黄庄', 6, '东西不多'),
  new Plan(4, '代缴水电费', 1512550800000, '科育社区99号楼', 2, '无'),
];

export function getAllPlans(): Plan[] {
  return plans;
}

export function getPlan(id: number): Plan {
  return plans.find(plan => plan.id === id);
}
