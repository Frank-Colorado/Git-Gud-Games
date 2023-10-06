import {
  CreateUserInput,
  LoginInput,
  UpdateUserInput,
  UserModel,
  User,
  EditGameInput,
} from '../schemas/UserT';
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

  async updateUser(input: UpdateUserInput & { user: User['_id'] }) {
    return UserModel.findByIdAndUpdate({ _id: input.user }, input, {
      new: true,
    }).lean();
  }

  async addGameToLibrary(input: EditGameInput & { user: User['_id'] }) {
    const { id, name } = input;
    return UserModel.findByIdAndUpdate(
      { _id: input.user },
      { $addToSet: { gameLibrary: { id, name } } },
      { new: true }
    ).lean();
  }

  async removeGameFromLibrary(input: EditGameInput & { user: User['_id'] }) {
    const { id, name } = input;
    return UserModel.findByIdAndUpdate(
      { _id: input.user },
      { $pull: { gameLibrary: { id, name } } },
      { new: true }
    ).lean();
  }
}

export default UserService;
