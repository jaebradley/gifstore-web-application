import gql from 'graphql-tag';

import UserURLs from '../fragments/UserURLs';

const query = gql`
  {
    me {
      ...UserURLs
    }
  }
  ${UserURLs}
`;

export default query;
