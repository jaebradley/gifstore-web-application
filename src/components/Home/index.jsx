import React from 'react';
import {
  Query,
} from 'react-apollo';
import {
  filter,
} from 'graphql-anywhere';

import ME_QUERY from 'GraphQL/queries/me';
import UserURLsConnection from 'GraphQL/fragments/UserURLsConnection';

import Actions from 'Containers/Home/Actions';
import AddImageDialog from 'Containers/Home/AddImageDialog';
import Images from '../Images';


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
              <Actions />
              <Images urls={filter(UserURLsConnection, data.me.urls)} />
              <AddImageDialog />
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
