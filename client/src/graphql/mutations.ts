import { graphql } from '../../gql';

export const CREATE_USER = graphql(`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      _id
      username
    }
  }
`);

export const LOGIN = graphql(`
  mutation login($input: LoginInput!) {
    login(input: $input)
  }
`);
