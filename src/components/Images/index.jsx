import React from 'react';
import {
  Query,
} from 'react-apollo';
import {
  List,
  AutoSizer,
  WindowScroller,
  CellMeasurerCache,
  CellMeasurer,
} from 'react-virtualized';

import query from './query';

import DeleteImage from '../DeleteImage';

const Image = ({ url }) => (
  <div style={{
    height: '250px',
    width: '250px',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <DeleteImage url={url} />
    <img
      key={url}
      alt="gif"
      src={url}
      style={{ maxHeight: '100%', maxWidth: '100%' }}
    />
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

        const cache = new CellMeasurerCache({
          fixedWidth: true,
          fixedHeight: false,
          defaultHeight: 300,
          defaultWidth: 300,
          minWidth: 300,
        });

        function renderCell({
          cellData, columnIndex, rowIndex, parent,
        }) {
          return (
            <CellMeasurer
              key={cellData}
              cache={cache}
              columnIndex={columnIndex}
              rowIndex={rowIndex}
              parent={parent}
            >
              {
               ({ measure }) => (
                 <Image url={cellData} onLoad={measure} />
               )
              }
            </CellMeasurer>
          );
        }

        console.log('urls', urls);

        // TODO: @jaebradley use virtualized grid in future
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
                      rowHeight={300}
                      width={width}
                      rowCount={rowCount}
                      rowRenderer={
                        ({ index, key }) => {
                          const items = [];
                          const fromIndex = index * imagesPerRow;
                          const toIndex = Math.min(fromIndex + imagesPerRow, urls.length);

                          for (let i = fromIndex; i < toIndex; i += 1) {
                            items.push(<Image url={urls[i]} />);
                          }

                          return (
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                              }}
                              key={key}
                            >
                              {items}
                            </div>
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
