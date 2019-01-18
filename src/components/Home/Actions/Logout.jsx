import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExitIcon from '@material-ui/icons/ExitToApp';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

export default class Logout extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }

  handleOnClick = () => {
    const {
      onClick,
    } = this.props;
    onClick();
  }

  render() {
    return (
      <SpeedDialAction
        key="Logout"
        icon={<ExitIcon />}
        tooltipTitle="Logout"
        onClick={this.handleOnClick}
      />
    );
  }
}
