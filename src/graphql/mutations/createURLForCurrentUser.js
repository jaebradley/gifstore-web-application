import gql from 'graphql-tag';

const createURLForCurrentUser = gql`
  mutation CreateURLForCurrentUser($urlId: ID!) {
    createURLForCurrentUser(input: { urlId: $urlId }) {
      urlEdge {
        node {
          id,
          url,
        }
      }
    }
  },
`;

export default createURLForCurrentUser;
