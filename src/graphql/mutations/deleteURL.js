import gql from 'graphql-tag';

const DELETE_URL = gql`
  mutation DeleteURL($url: String!) {
    DeleteURL(url: $url) {
      id,
      url,
    }
  }
`;

export default DELETE_URL;
