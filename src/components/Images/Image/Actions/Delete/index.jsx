import React, { Component } from 'react';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

export default class DeleteImage extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      root: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handleOnClick = () => {
    const {
      url,
      onClick,
    } = this.props;
    onClick(url);
  }

  render() {
    const {
      classes,
    } = this.props;

    return (
      <IconButton
        className={classes.root}
        size="small"
        onClick={this.handleOnClick}
      >
        <Delete
          color="secondary"
          fontSize="small"
        />
      </IconButton>
    );
  }
}
