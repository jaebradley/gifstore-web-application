import gql from 'graphql-tag';

const query = gql`
  {
    me {
      urls {
        edges {
          node {
            id,
            url,
          }
        }
      }
    }
  }
`;

export default query;
