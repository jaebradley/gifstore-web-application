import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../containers/Image';

const Row = ({ children, classes, id }) => (
  <div
    key={id}
    className={classes.root}
  >
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.arrayOf(Image),
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

Row.defaultProps = {
  children: [],
};

export default Row;
