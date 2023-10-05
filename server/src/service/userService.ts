import { UserModel } from '../models/UserT';

class UserService {
  async createUser(input: any) {
    // Call User Model to create user
    return UserModel.create(input);
  }
}

export default UserService;
