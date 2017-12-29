import { User } from '../services/user.service';


export function getUser(): User {
  return new User(1, '小蓝', '王小蓝', 93, '山大学15宿舍楼', 13728340542, null);
}
