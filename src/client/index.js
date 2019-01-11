import {
  ApolloClient,
} from 'apollo-client';
import {
  ApolloLink,
  concat,
} from 'apollo-link';
import {
  HttpLink,
} from 'apollo-link-http';
import {
  onError,
} from 'apollo-link-error';
import {
  InMemoryCache,
} from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: `${process.env.SERVER_BASE_URL}/graphql`,
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: window.localStorage.getItem('authToken'),
    },
  });

  return forward(operation);
});

const logoutLink = onError(({ networkError }) => {
  if (networkError.statusCode === 401) {
    window.location.assign('/login');
  }
});

const client = new ApolloClient({
  link: concat(authLink, httpLink, logoutLink),
  cache: new InMemoryCache(),
});

export default client;
