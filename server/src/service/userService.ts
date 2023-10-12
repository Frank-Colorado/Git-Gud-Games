import {
  UserInput,
  UpdateUserInput,
  UserModel,
  User,
  EditGameInput,
  Auth,
} from '../schemas/User';
import { ApolloError } from 'apollo-server-express';
import bcrypt from 'bcrypt';
import { signJwt } from '../utils/jwt';

class UserService {
  async createUser(input: UserInput): Promise<Auth> {
    // Call User Model to create user
    const user = await UserModel.create(input);
    // Sign a JWT Token
    const token = signJwt(user);
    // Return the user and token in an Auth object
    return { token, user };
  }

  async login({ username, password }: UserInput): Promise<Auth> {
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
    // Return the user and token in an Auth object
    return { token, user };
  }

  async updateUser(input: UpdateUserInput & { user: User['_id'] }) {
    return UserModel.findByIdAndUpdate({ _id: input.user }, input, {
      new: true,
    }).lean();
  }

  async addGameToLibrary(input: EditGameInput & { user: User['_id'] }) {
    const { id, name, image } = input;
    return UserModel.findByIdAndUpdate(
      { _id: input.user },
      { $addToSet: { gameLibrary: { id, name, image } } },
      { new: true }
    ).lean();
  }

  async removeGameFromLibrary(input: EditGameInput & { user: User['_id'] }) {
    const { id } = input;
    return UserModel.findByIdAndUpdate(
      { _id: input.user },
      { $pull: { gameLibrary: id } },
      { new: true }
    ).lean();
  }
}

export default UserService;
