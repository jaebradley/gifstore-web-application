import {
  fromJS,
} from 'immutable';

import {
  LOGOUT,
} from 'Actions/types';
import {
  SET_AUTH_TOKEN,
} from 'Actions/authentication/types';

const initialState = fromJS({
  authToken: null,
  loggedIn: false,
});

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN: {
      return state.set('authToken', action.payload.authToken);
    }
    case LOGOUT: {
      return state.set('loggedIn', false);
    }
    default: {
      return state;
    }
  }
};

export default app;
