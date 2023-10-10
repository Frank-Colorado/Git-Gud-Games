import { Query, Mutation, Resolver, Arg, Ctx, Authorized } from 'type-graphql';
import {
  User,
  UserInput,
  UpdateUserInput,
  EditGameInput,
  Auth,
} from '../schemas/User';
import UserService from '../service/userService';
import Context from '../types/context';

@Resolver()
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Query(() => User)
  me(@Ctx() context: Context) {
    return context.user.data;
  }

  @Mutation(() => Auth)
  createUser(@Arg('input') input: UserInput) {
    return this.userService.createUser(input);
  }

  @Mutation(() => Auth)
  login(@Arg('input') input: UserInput, @Ctx() context: Context) {
    return this.userService.login(input);
  }

  @Authorized()
  @Mutation(() => User)
  updateUser(@Arg('input') input: UpdateUserInput, @Ctx() context: Context) {
    const user = context.user.data!;
    return this.userService.updateUser({ ...input, user: user?._id });
  }

  @Authorized()
  @Mutation(() => User)
  addGameToLibrary(
    @Arg('input') input: EditGameInput,
    @Ctx() context: Context
  ) {
    const user = context.user.data!;
    return this.userService.addGameToLibrary({ ...input, user: user?._id });
  }

  @Authorized()
  @Mutation(() => User)
  removeGameFromLibrary(
    @Arg('input') input: EditGameInput,
    @Ctx() context: Context
  ) {
    const user = context.user.data!;
    return this.userService.removeGameFromLibrary({
      ...input,
      user: user?._id,
    });
  }
}
