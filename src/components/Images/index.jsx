import React from 'react';
import {
  Query,
} from 'react-apollo';
import {
  List,
  AutoSizer,
} from 'react-virtualized';

import query from './query';
import Image from '../../containers/Image';

const Row = ({ id, children }) => (
  <div
    key={id}
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}
  >
    {children}
  </div>
);

const Images = () => (
  <Query query={query}>
    {
      ({
        data,
      }) => {
        const urls = [];
        if (data && data.me && data.me.urls && data.me.urls.edges) {
          data.me.urls.edges.forEach(edge => urls.push(edge.node.url));
        }

        return (
          <div style={{ height: '100vh', width: '100vw' }}>
            <AutoSizer>
              {
                ({ height, width }) => {
                  const imagesPerRow = Math.floor(width / 250);
                  const rowCount = Math.ceil(urls.length / imagesPerRow);
                  return (
                    <List
                      height={height}
                      overscanRowCount={3}
                      rowHeight={250}
                      width={width}
                      rowCount={rowCount}
                      rowRenderer={
                        ({ index, key }) => {
                          const items = [];
                          const fromIndex = index * imagesPerRow;
                          const toIndex = Math.min(fromIndex + imagesPerRow, urls.length);

                          for (let i = fromIndex; i < toIndex; i += 1) {
                            items.push(<Image key={urls[i]} url={urls[i]} />);
                          }

                          return (
                            <Row key={key} id={key}>
                              {items}
                            </Row>
                          );
                        }
                      }
                    />
                  );
                }
              }
            </AutoSizer>
          </div>
        );
      }
    }
  </Query>
);

export default Images;
