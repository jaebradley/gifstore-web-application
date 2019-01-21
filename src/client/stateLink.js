import {
  withClientState,
} from 'apollo-link-state';

import setAddImage from 'GraphQL/resolvers/setAddImage';

import cache from './cache';

const DEFAULT_ADD_IMAGE = {
  isOpen: false,
  url: '',
  isValidImage: false,
  __typename: 'AddImage',
};

const defaults = {
  AddImage: DEFAULT_ADD_IMAGE,
};

const resolvers = {
  Mutation: {
    setAddImage,
  },
};

const stateLink = withClientState({
  cache,
  defaults,
  resolvers,
});

export {
  DEFAULT_ADD_IMAGE,
};

export default stateLink;
