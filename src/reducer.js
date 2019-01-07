import {
  Map,
} from 'immutable';

import {
  SET_AUTH_TOKEN,
} from 'Actions/authentication/types';

const initialState = new Map({
  authToken: null,
});

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN: {
      return state.set('authToken', action.payload.authToken);
    }
    default: {
      return state;
    }
  }
};

export default app;
