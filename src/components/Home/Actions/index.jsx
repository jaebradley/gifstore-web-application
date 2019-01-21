import React from 'react';
import PropTypes from 'prop-types';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import ExitIcon from '@material-ui/icons/ExitToApp';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import AddIcon from '@material-ui/icons/Add';

class Actions extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      root: PropTypes.string.isRequired,
    }).isRequired,
    onAddImageClick: PropTypes.func.isRequired,
    onLogoutClick: PropTypes.func.isRequired,
  };

  state = {
    direction: 'down',
    open: false,
    hidden: false,
  };

  handleAddImageClick = () => {
    const {
      onAddImageClick,
    } = this.props;
    this.setState({ open: false }, () => { onAddImageClick({ isOpen: true }); });
  }

  handleLogoutClick = () => {
    const {
      onLogoutClick,
    } = this.props;
    this.setState({ open: false }, onLogoutClick);
  }

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const {
      direction,
      hidden,
      open,
    } = this.state;

    return (
      <SpeedDial
        ariaLabel="GifStore Actions"
        className={classes.root}
        hidden={hidden}
        icon={<SpeedDialIcon />}
        onBlur={this.handleClose}
        onClick={this.handleClick}
        onClose={this.handleClose}
        onMouseEnter={this.handleOpen}
        onMouseLeave={this.handleClose}
        open={open}
        direction={direction}
      >
        {
      [
        <SpeedDialAction
          key="Add GIF"
          icon={<AddIcon />}
          tooltipTitle="Add GIF"
          onClick={this.handleAddImageClick}
        />,
        <SpeedDialAction
          key="Logout"
          icon={<ExitIcon />}
          tooltipTitle="Logout"
          onClick={this.handleLogoutClick}
        />,
      ]
    }
      </SpeedDial>
    );
  }
}

export default Actions;
