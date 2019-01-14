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
      }) => {
        const urls = [];
        if (data && data.me && data.me.urls && data.me.urls.edges) {
          for (let i = 0; i < data.me.urls.edges.length; i += 1) {
            const edge = data.me.urls.edges[i];
            urls.push(edge.node.url);
          }
        }

        // TODO: @jaebradley use virtualized grid in future

        return urls.map(url => (
          <div style={{ height: '250px', width: '250px' }}>
            <img
              key={url}
              alt="gif"
              src={url}
              style={{ maxHeight: '100%', maxWidth: '100%' }}
            />
          </div>
        ));
      }
    }
  </Query>
);

export default Images;
