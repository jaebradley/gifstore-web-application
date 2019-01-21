import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class AddImageDialog extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      root: PropTypes.string.isRequired,
      addButton: PropTypes.string.isRequired,
      input: PropTypes.string.isRequired,
      inputContainer: PropTypes.string.isRequired,
      imageContainer: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    isValidImage: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
  }

  handleClose = () => {
    const {
      onClose,
    } = this.props;
    onClose();
  }

  handleInputChange = (event) => {
    const {
      onChange,
    } = this.props;
    onChange({ url: event.target.value });
  }

  handleSubmit = () => {
    const {
      url,
      onSubmit,
    } = this.props;
    onSubmit(url);
  }

  render() {
    const {
      classes,
      open,
      isValidImage,
      url,
    } = this.props;

    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
      >
        <div className={classes.root}>
          <div className={classes.inputContainer}>
            <TextField
              autoFocus
              className={classes.input}
              error={!isValidImage}
              id="outlined-url"
              label="URL"
              margin="normal"
              variant="outlined"
              onChange={this.handleInputChange}
            />
            {
              isValidImage && (
                <div className={classes.addButton}>
                  <Button
                    color="secondary"
                    fontSize="medium"
                    disableRipple
                    onClick={this.handleSubmit}
                    variant="outlined"
                  >
                    Add
                  </Button>
                </div>
              )
            }
          </div>
          {
            isValidImage && (
              <div className={classes.imageContainer}>
                <img
                  className={classes.image}
                  alt="add"
                  src={url}
                />
              </div>
            )
          }
        </div>
      </Dialog>
    );
  }
}
