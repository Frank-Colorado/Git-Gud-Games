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

export const UPDATE_USER = graphql(`
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      username
      avatar
    }
  }
`);

export const ADD_GAME_TO_LIBRARY = graphql(`
  mutation addGameToLibrary($input: EditGameInput!) {
    addGameToLibrary(input: $input) {
      gameLibrary {
        id
        name
      }
    }
  }
`);

export const REMOVE_GAME_FROM_LIBRARY = graphql(`
  mutation removeGameFromLibrary($input: EditGameInput!) {
    removeGameFromLibrary(input: $input) {
      gameLibrary {
        id
        name
      }
    }
  }
`);
