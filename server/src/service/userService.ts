import { CreateUserInput, LoginInput, UserModel } from '../models/UserT';
import Context from '../types/context';
import { ApolloError } from 'apollo-server-express';

class UserService {
  async createUser(input: CreateUserInput) {
    // Call User Model to create user
    return UserModel.create(input);
  }

  async login(input: LoginInput, context: Context) {
    // Get our user by username
    const user = await UserModel.find().findByUsername(input.username).lean();
    // If the user doesn't exist, throw an error
    if (!user) {
      throw new ApolloError('Invalid credentials.');
    }

    const validPassword = await bcrypt.compare(input.password, user.password);
  }
}

export default UserService;
