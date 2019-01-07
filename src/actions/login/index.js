import {
  SUCCESSFUL,
  FAILED,
} from 'Actions/login/types';

function successful(data) {
  return {
    type: SUCCESSFUL,
    payload: {
      data,
    },
  };
}

function failed(data) {
  return {
    type: FAILED,
    payload: {
      data,
    },
  };
}

export {
  successful,
  failed,
};
