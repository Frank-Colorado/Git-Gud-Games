import { CreateUserInput, LoginInput, UserModel } from '../models/UserT';
import Context from '../types/context';
import { ApolloError } from 'apollo-server-express';
import bcrypt from 'bcrypt';

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
    // Check if the password matches
    const validPassword = await bcrypt.compare(input.password, user.password);
    // If the password doesn't match, throw an error
    if (!validPassword) {
      throw new ApolloError('Invalid credentials.');
    }
    // sign a JWT Token
    // Set a cookie for the JWT Token
    // Return the JWT Token
  }
}

export default UserService;
