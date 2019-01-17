import gql from 'graphql-tag';

export default gql`
  fragment UserURLsConnection on URLsConnection {
    edges {
      node {
        id,
        url,
      }
    }
  }
`;
