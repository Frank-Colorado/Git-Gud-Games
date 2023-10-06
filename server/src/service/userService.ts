import { CreateUserInput, LoginInput, UserModel } from '../schemas/UserT';
import Context from '../types/context';
import { ApolloError } from 'apollo-server-express';
import bcrypt from 'bcrypt';
import { signJwt } from '../utils/jwt';

class UserService {
  async createUser(input: CreateUserInput) {
    // Call User Model to create user
    return UserModel.create(input);
  }

  async login({ username, password }: LoginInput, context: Context) {
    // Get our user by username
    const user = await UserModel.find().findByUsername(username).lean();
    // If the user doesn't exist, throw an error
    if (!user) {
      throw new ApolloError('Invalid credentials.');
    }
    // Check if the password matches
    const validPassword = await bcrypt.compare(password, user.password);
    // If the password doesn't match, throw an error
    if (!validPassword) {
      throw new ApolloError('Invalid credentials.');
    }
    // sign a JWT Token
    const token = signJwt(user);
    // Return the JWT Token
    return token;
  }
}

export default UserService;
