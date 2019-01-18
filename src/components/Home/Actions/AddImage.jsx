import React, { Component } from 'react';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import isUrl from 'is-url';
import AddCircle from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

class AddImage extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    showModal: false,
    isURLValid: false,
  }

  debouncedValidateURL = lodash.debounce(value => this.validateURL(value));

  handleClick = () => {
    this.setState({ showModal: true });
  }

  handleModalClose = () => {
    this.setState({ showModal: false });
  }

  handleSubmit = () => {
    console.log('add image');
  }

  validateURL = url => this.setState({ isURLValid: isUrl(url) });

  handleInputChange = (value) => {
    this.debouncedValidateURL(value);
  }

  render() {
    const {
      showModal,
      isURLValid,
    } = this.state;
    return (
      <div>
        <SpeedDialAction
          key="Add GIF"
          icon={<AddIcon />}
          tooltipTitle="Add GIF"
          onClick={this.handleClick}
        />
        <Dialog
          open={showModal}
          onClose={this.handleModalClose}
        >
          <TextField
            error={!isURLValid}
            id="outlined-url"
            label="URL"
            margin="normal"
            variant="outlined"
            onChange={this.handleInputChange}
          />
          {
            isURLValid && (
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
      </div>
    );
  }
}

export default AddImage;
