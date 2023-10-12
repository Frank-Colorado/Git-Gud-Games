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
