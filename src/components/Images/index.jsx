import React from 'react';

import {
  Query,
} from 'react-apollo';

import query from './query';

const Images = () => (
  <Query query={query}>
    {
      ({
        data,
      }) => (
        <div>
          {
            data && data.me && data.me.urls && data.me.urls.edges && data.me.urls.edges[0].node.url
          }
        </div>
      )
    }
  </Query>
);

export default Images;
