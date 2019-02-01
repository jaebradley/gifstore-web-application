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
import deleteURLForCurrentUser from 'GraphQL/mutations/deleteURLForCurrentUser';
import ME from 'GraphQL/queries/me';

import styles from './styles';

function handleMutationProperties({ mutate }) {
  return {
    onClick: function deleteURLMutation(urlId) {
      mutate({
        variables: { urlId },
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
    deleteURLForCurrentUser,
    {
      props: handleMutationProperties,
    },
  ),
)(Delete);
