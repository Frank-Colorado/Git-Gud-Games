import { graphql } from '../../gql';

export const CREATE_USER = graphql(`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      token
      user {
        _id
        username
        avatar
        bio
        gameLibrary {
          id
          name
          image
        }
      }
    }
  }
`);

export const LOGIN = graphql(`
  mutation login($input: UserInput!) {
    login(input: $input) {
      token
      user {
        _id
        username
        avatar
        bio
        gameLibrary {
          id
          name
          image
        }
      }
    }
  }
`);

export const UPDATE_USER = graphql(`
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      username
      avatar
      bio
    }
  }
`);

export const ADD_GAME_TO_LIBRARY = graphql(`
  mutation addGameToLibrary($input: EditGameInput!) {
    addGameToLibrary(input: $input) {
      gameLibrary {
        id
        name
        image
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
        image
      }
    }
  }
`);
