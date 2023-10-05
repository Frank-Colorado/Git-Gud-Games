import { Query, Mutation, Resolver, Arg } from 'type-graphql';
import { User, CreateUserInput } from '../models/UserT';
import UserService from '../service/userService';

@Resolver()
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Mutation(() => User)
  createUser(@Arg('input') input: CreateUserInput) {
    return this.userService.createUser(input);
  }

  @Mutation(() => String) // Returns JWT token
  login(@Arg('input') input: LoginInput, @Ctx() context: Context) {
    return this.userService.login(input);
  }

  @Query(() => User)
  me() {
    return {
      _id: '1234',
      username: 'test',
      avatar: 'test',
      gameLibrary: [],
    };
  }
}
