import {
  withStyles,
} from '@material-ui/core/styles';
import {
  connect,
} from 'react-redux';

import {
  logout,
} from 'Actions';
import {
  openAddImageDialog,
} from 'Actions/home';
import Actions from 'Components/Home/Actions';

import styles from './styles';

function mapDispatchToProps(dispatch) {
  return {
    onAddImageClick: () => dispatch(openAddImageDialog()),
    onLogoutClick: () => dispatch(logout()),
  };
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Actions));
