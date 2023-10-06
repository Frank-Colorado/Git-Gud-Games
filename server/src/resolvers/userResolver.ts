import { Query, Mutation, Resolver, Arg, Ctx, Authorized } from 'type-graphql';
import {
  User,
  CreateUserInput,
  LoginInput,
  UpdateUserInput,
  EditGameInput,
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

  @Authorized()
  @Mutation(() => User)
  updateUser(@Arg('input') input: UpdateUserInput, @Ctx() context: Context) {
    const user = context.user!;
    return this.userService.updateUser({ ...input, user: user?._id });
  }

  @Authorized()
  @Mutation()
  addGameToLibrary(
    @Arg('input') input: EditGameInput,
    @Ctx() context: Context
  ) {
    const user = context.user!;
    return this.userService.addGameToLibrary({ ...input, user: user?._id });
  }

  @Authorized()
  @Mutation()
  removeGameFromLibrary(
    @Arg('input') input: EditGameInput,
    @Ctx() context: Context
  ) {
    const user = context.user!;
    return this.userService.removeGameFromLibrary({
      ...input,
      user: user?._id,
    });
  }
}
