import { CreateUserInput, LoginInput, UserModel } from '../models/UserT';
import Context from '../types/context';

class UserService {
  async createUser(input: CreateUserInput) {
    // Call User Model to create user
    return UserModel.create(input);
  }

  async login(input: LoginInput, context: Context) {
    // Get our user by username
    const user = UserModel.findOne({ username: input.username });
  }
}

export default UserService;
