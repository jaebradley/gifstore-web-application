import {
  withStyles,
} from '@material-ui/core/styles';
import {
  connect,
} from 'react-redux';
import {
  graphql,
} from 'react-apollo';
import {
  compose,
} from 'recompose';

import {
  logout,
} from 'Actions';
import Actions from 'Components/Home/Actions';
import SetAddImage from 'GraphQL/mutations/SetAddImage';

import styles from './styles';

function handleMutationProperties({ mutate }) {
  return {
    onAddImageClick: function setAddImage({ url, isOpen, isValidImage }) {
      mutate({
        variables: { url, isOpen, isValidImage },
      });
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogoutClick: () => dispatch(logout()),
  };
}


export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps),
  graphql(
    SetAddImage,
    {
      props: handleMutationProperties,
    },
  ),
)(Actions);
