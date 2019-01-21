import gql from 'graphql-tag';

const GetAddImage = gql`
  {
    AddImage @client {
      isOpen,
      url,
      isValidImage,
    }
  }
`;

export default GetAddImage;
