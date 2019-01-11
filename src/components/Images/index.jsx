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
            'foo'
          }
        </div>
      )
    }
  </Query>
);

export default Images;
