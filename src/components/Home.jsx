import React from 'react';
import {
  Query,
} from 'react-apollo';
import {
  filter,
} from 'graphql-anywhere';

import Images from './Images';
import AddURL from './AddURL';

import ME_QUERY from '../graphql/queries/me';
import UserURLsConnection from '../graphql/fragments/UserURLsConnection';

const Home = () => (
  <Query query={ME_QUERY}>
    {
      ({
        data,
        loading,
      }) => {
        if (!loading) {
          return (
            <div>
              <AddURL />
              <Images urls={filter(UserURLsConnection, data.me.urls)} />
            </div>
          );
        }
        // TODO: @jaebradley add proper loader
        return (
          <div>Loading</div>
        );
      }
    }
  </Query>
);

export default Home;
