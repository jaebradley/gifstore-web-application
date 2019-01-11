import gql from 'graphql-tag';

const query = gql`
  {
    user {
      url {
        id,
        url,
      }
    }
  }
`;

export default query;
