import gql from 'graphql-tag';

const createURL = gql`
  mutation createURL($url: String!) {
    createURL(input: { url: $url }) {
      id,
    }
  }
`;

export default createURL;
