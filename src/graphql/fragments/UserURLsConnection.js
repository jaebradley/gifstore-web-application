import gql from 'graphql-tag';

export default gql`
  fragment UserURLsConnection on URLConnection {
    edges {
      node {
        id,
        url,
      }
    }
  }
`;
