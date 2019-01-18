import {
  fromJS,
} from 'immutable';

import {
  LOGOUT,
} from 'Actions/types';
import {
  SET_AUTH_TOKEN,
} from 'Actions/authentication/types';
import {
  OPEN_ADD_IMAGE_DIALOG,
  CLOSE_ADD_IMAGE_DIALOG,
} from 'Actions/home/types';

const initialState = fromJS({
  authToken: null,
  loggedIn: false,
  home: {
    isAddImageDialogOpen: false,
  },
});

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN: {
      return state.set('authToken', action.payload.authToken);
    }
    case OPEN_ADD_IMAGE_DIALOG: {
      return state.setIn(['home', 'isAddImageDialogOpen'], true);
    }
    case CLOSE_ADD_IMAGE_DIALOG: {
      return state.setIn(['home', 'isAddImageDialogOpen'], false);
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
