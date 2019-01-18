import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import AddCircle from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import isUrl from 'is-url';

export default class AddImageDialog extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    url: '',
    isValid: false,
  };

  handleClose = () => {
    const {
      onClose,
    } = this.props;
    onClose();
  }

  handleInputChange = (event) => {
    // TODO: @jaebradley add better url validation
    const isValid = isUrl(event.target.value);
    this.setState({ url: event.target.value, isValid });
  }

  handleSubmit = () => {
    const {
      onSubmit,
    } = this.props;
    const {
      url,
    } = this.state;
    onSubmit(url);
  }

  render() {
    const {
      open,
    } = this.props;
    const {
      isValid,
    } = this.state;

    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
      >
        <TextField
          error={!isValid}
          id="outlined-url"
          label="URL"
          margin="normal"
          variant="outlined"
          onChange={this.handleInputChange}
        />
        {
          isValid && (
            <IconButton
              size="small"
              onClick={this.handleSubmit}
            >
              <AddCircle
                color="secondary"
                fontSize="small"
              />
            </IconButton>
          )
        }
      </Dialog>
    );
  }
}
