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
import ME from '../../graphql/queries/me';

function handleMutationProperties({ mutate }) {
  return {
    onClick: function deleteURLMutation(url) {
      mutate({
        variables: { url },
        refetchQueries: [{
          query: ME,
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
