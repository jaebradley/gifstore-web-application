import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  AutoSizer,
} from 'react-virtualized';

import Image from '../../containers/Image';
import Row from '../../containers/Images/Row';

const Images = ({ urls }) => {
  const urlData = [];
  if (urls && urls.edges) {
    urls.edges.forEach(edge => urlData.push(edge.node.url));
  }

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <AutoSizer>
        {
          ({ height, width }) => {
            const imagesPerRow = Math.floor(width / 250);
            const rowCount = Math.ceil(urlData.length / imagesPerRow);
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
                    const toIndex = Math.min(fromIndex + imagesPerRow, urlData.length);

                    for (let i = fromIndex; i < toIndex; i += 1) {
                      items.push(<Image key={urlData[i]} url={urlData[i]} />);
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
};

Images.propTypes = {
  urls: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }),
};

Images.defaultProps = {
  urls: {
    edges: {},
  },
};

export default Images;
