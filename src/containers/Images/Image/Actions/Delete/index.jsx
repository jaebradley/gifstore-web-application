import {
  graphql,
} from 'react-apollo';
import {
  compose,
} from 'recompose';
import {
  withStyles,
} from '@material-ui/core/styles';

import Delete from 'Components/Images/Image/Actions/Delete';
import DELETE_URL_MUTATION from 'GraphQL/mutations/deleteURL';
import ME from 'GraphQL/queries/me';

import styles from './styles';

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
)(Delete);
