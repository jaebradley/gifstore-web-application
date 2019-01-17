import gql from 'graphql-tag';

import UserURLsConnection from './UserURLsConnection';

export default gql`
  fragment UserURLs on User {
    urls {
      ...UserURLsConnection
    }
  }
  ${UserURLsConnection}
`;
