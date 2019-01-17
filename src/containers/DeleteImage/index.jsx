import {
  graphql,
} from 'react-apollo';
import {
  compose,
} from 'recompose';
import {
  withStyles,
} from '@material-ui/core/styles';

import styles from './styles';
import DeleteImage from '../../components/DeleteImage';
import DELETE_URL_MUTATION from '../../graphql/mutations/deleteURL';
import GET_IMAGES from '../../graphql/queries/getImages';

function handleMutationProperties({ mutate }) {
  return {
    onClick: function deleteURLMutation(url) {
      mutate({
        variables: { url },
        refetchQueries: [{
          query: GET_IMAGES,
        }],
      });
    },
  };
}

export default compose(
  withStyles(styles),
  graphql(
    DELETE_URL_MUTATION,
    {
      props: handleMutationProperties,
    },
  ),
)(DeleteImage);
