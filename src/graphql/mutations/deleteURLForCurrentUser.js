import gql from 'graphql-tag';

const deleteURLForCurrentUser = gql`
  mutation deleteURLForCurrentUser($urlId: ID!) {
    deleteURLForCurrentUser(input: { urlId: $urlId }) {
      id,
    }
  }
`;

export default deleteURLForCurrentUser;
