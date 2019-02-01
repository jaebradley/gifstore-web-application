import React from 'react';
import PropTypes from 'prop-types';

import Delete from 'Containers/Images/Image/Actions/Delete';
import Copy from 'Containers/Images/Image/Actions/Copy';

const Actions = ({ classes, url, urlId }) => (
  <div className={classes.root}>
    <Delete urlId={urlId} />
    <Copy url={url} />
  </div>
);

Actions.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
  urlId: PropTypes.string.isRequired,
};

export default Actions;
