import gql from 'graphql-tag';

const url = gql`
  query URL($value: String!) {
    url(value: $value) {
      id,
      url,
    }
  }
`;

export default url;
