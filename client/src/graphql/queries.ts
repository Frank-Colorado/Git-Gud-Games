import { graphql } from '../../gql';

export const GET_ME = graphql(`
  query getMe {
    me {
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
`);

export const GET_USER_GAMES = graphql(`
  query getUserGames {
    me {
      gameLibrary {
        id
        name
        image
      }
    }
  }
`);
