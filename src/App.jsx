import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  MuiThemeProvider,
} from '@material-ui/core/styles';
import {
  whyDidYouUpdate,
} from 'why-did-you-update';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import theme from './theme';

import rootSaga from './sagas';
import reducer from './reducer';

import Login from './containers/Login';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Login />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
