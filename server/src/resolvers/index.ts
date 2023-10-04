import { Query, Resolver } from 'type-graphql';

@Resolver()
export class PlaceholderResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }
}
