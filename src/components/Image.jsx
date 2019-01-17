import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DeleteImage from '../containers/DeleteImage';

export default class Image extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      root: PropTypes.string.isRequired,
      imageContainer: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }

  state = {
    showOverlay: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    const {
      url,
    } = this.props;
    const {
      showOverlay,
    } = this.state;
    return nextProps.url !== url
      || nextState.showOverlay !== showOverlay;
  }

  onHover = () => {
    this.setState({ showOverlay: true });
  }

  onLeave = () => {
    this.setState({ showOverlay: false });
  }

  render() {
    const {
      classes,
      url,
    } = this.props;
    const {
      showOverlay,
    } = this.state;
    return (
      <div className={classes.root}>
        <div
          className={classes.imageContainer}
          onMouseEnter={this.onHover}
          onMouseLeave={this.onLeave}
        >
          {
            showOverlay && <DeleteImage url={url} />
          }
          <img
            className={classes.image}
            key={url}
            alt="gif"
            src={url}
          />
        </div>
      </div>
    );
  }
}
