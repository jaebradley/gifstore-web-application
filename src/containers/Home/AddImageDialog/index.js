import {
  connect,
} from 'react-redux';
import {
  compose,
} from 'recompose';
import {
  withStyles,
} from '@material-ui/core/styles';
import {
  graphql,
} from 'react-apollo';

import {
  closeAddImageDialog,
} from 'Actions/home';
import AddImageDialog from 'Components/Home/AddImageDialog';
import {
  isAddImageDialogOpen,
} from 'Data/selectors/home';
import AddURL from 'GraphQL/mutations/AddURL';
import Me from 'GraphQL/queries/me';

import styles from './styles';

function handleMutationProperties({ mutate }) {
  return {
    onSubmit: function addURL(url) {
      mutate({
        variables: { url },
        refetchQueries: [{
          query: Me,
        }],
      });
    },
  };
}

function mapStateToProps(state) {
  return {
    open: isAddImageDialogOpen(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClose: () => dispatch(closeAddImageDialog()),
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  graphql(
    AddURL,
    {
      props: handleMutationProperties,
    },
  ),
)(AddImageDialog);
