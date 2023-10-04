import { Query, Resolver } from 'type-graphql';
import 'reflect-metadata';

@Resolver()
export class PlaceholderResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }
}
