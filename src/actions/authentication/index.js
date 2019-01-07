import {
  SET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
} from './types';

function setAuthToken(authToken) {
  return {
    type: SET_AUTH_TOKEN,
    payload: {
      authToken,
    },
  };
}

function removeAuthToken() {
  return {
    type: REMOVE_AUTH_TOKEN,
  };
}

export {
  setAuthToken,
  removeAuthToken,
};
