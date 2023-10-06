import { Query, Mutation, Resolver, Arg, Ctx } from 'type-graphql';
import {
  User,
  Auth,
  CreateUserInput,
  LoginInput,
  UpdateUserInput,
} from '../schemas/UserT';
import UserService from '../service/userService';
import Context from '../types/context';

@Resolver()
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Query(() => User)
  me(@Ctx() context: Context) {
    return context.user;
  }

  @Mutation(() => User)
  createUser(@Arg('input') input: CreateUserInput) {
    return this.userService.createUser(input);
  }

  @Mutation(() => String) // Returns the JWT Token
  login(@Arg('input') input: LoginInput, @Ctx() context: Context) {
    return this.userService.login(input, context);
  }

  @Mutation(() => User)
  updateUser(@Arg('input') input: UpdateUserInput, @Ctx() context: Context) {
    const user = context.user;
    return this.userService.updateUser({ ...input, user: user?._id });
  }
}
