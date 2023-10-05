import { Query } from 'type-graphql';
import { User } from '../models/UserT';

export default class UserResolver {
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
