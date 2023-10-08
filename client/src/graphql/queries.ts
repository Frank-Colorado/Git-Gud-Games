import { graphql } from '../../gql';

export const GET_ME = graphql(`
  query getMe {
    me {
      _id
      username
      avatar
      gameLibrary {
        id
        name
      }
    }
  }
`);
