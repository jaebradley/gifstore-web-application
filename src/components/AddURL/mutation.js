import gql from 'graphql-tag';

const ADD_URL = gql`
  mutation AddURL($url: String!) {
    AddURL(url: $url) {
      id,
    }
  }
`;

export default ADD_URL;
