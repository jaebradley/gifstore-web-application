import {
  compose,
} from 'recompose';
import {
  withStyles,
} from '@material-ui/core/styles';
import {
  graphql,
} from 'react-apollo';

import AddImageDialog from 'Components/Home/AddImageDialog';
import AddURL from 'GraphQL/mutations/AddURL';
import Me from 'GraphQL/queries/me';
import SetAddImage from 'GraphQL/mutations/SetAddImage';
import GetAddImage from 'GraphQL/queries/GetAddImage';

import styles from './styles';

function handleGetAddImageQueryProperties({ data: { AddImage } }) {
  const {
    isOpen,
    url,
    isValidImage,
  } = AddImage;
  return {
    open: isOpen,
    url,
    isValidImage,
  };
}

function handleSetAddImageMutationProperties({ mutate }) {
  return {
    onChange: function handleChange({ url }) {
      mutate({
        variables: { url },
      });
    },
    onClose: function handleClose() {
      mutate({
        variables: {
          isOpen: false,
        },
      });
    },
  };
}

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

export default compose(
  withStyles(styles),
  graphql(
    GetAddImage,
    {
      props: handleGetAddImageQueryProperties,
    },
  ),
  graphql(
    SetAddImage,
    {
      props: handleSetAddImageMutationProperties,
    },
  ),
  graphql(
    AddURL,
    {
      props: handleMutationProperties,
    },
  ),
)(AddImageDialog);
