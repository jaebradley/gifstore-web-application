import React, { Component } from 'react';
import LinkIcon from '@material-ui/icons/Link';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';

export default class Copy extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      root: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  };

  handleOnClick = () => {
    const {
      url,
    } = this.props;
    copy(url);
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
        <LinkIcon
          color="secondary"
          fontSize="small"
        />
      </IconButton>
    );
  }
}
