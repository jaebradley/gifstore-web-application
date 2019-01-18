import gql from 'graphql-tag';

const AddURL = gql`
  mutation AddURL($url: String!) {
    AddURL(url: $url) {
      id,
    }
  }
`;

export default AddURL;
