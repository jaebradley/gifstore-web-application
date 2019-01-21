import gql from 'graphql-tag';

const SetAddImage = gql`
  mutation SetAddImage($isOpen: Boolean, $url: String) {
    setAddImage(isOpen: $isOpen, url: $url) @client {
      isOpen,
      url,
      isValidImage,
    }
  }
`;

export default SetAddImage;
