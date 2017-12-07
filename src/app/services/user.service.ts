import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUser(id: number): User {
    return new User(1, 'CoderBen', '金奔', 193, '山大学15宿舍楼', 13567898765, null);
  }

}

export class User {
  constructor(
    public id: number,
    public name: string,
    public trueName: string,
    public creditValue: number,
    public domicile: string,
    public phoneNumber: number,
    public idCard: any
  ) {}
}
