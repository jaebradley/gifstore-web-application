import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Actions from 'Containers/Images/Image/Actions';

export default class Image extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      hovering: PropTypes.string.isRequired,
      root: PropTypes.string.isRequired,
      imageContainer: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
    urlId: PropTypes.string.isRequired,
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
      urlId,
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
            showOverlay && <Actions url={url} urlId={urlId} />
          }
          <img
            className={classnames(
              {
                [classes.image]: true,
                [classes.hovering]: showOverlay,
              },
            )}
            key={url}
            alt="gif"
            src={url}
          />
        </div>
      </div>
    );
  }
}
