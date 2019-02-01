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
  DEFAULT_ADD_IMAGE,
} from 'Client/stateLink';
import AddImageDialog from 'Components/Home/AddImageDialog';
import createURL from 'GraphQL/mutations/createURL';
import createURLForCurrentUser from 'GraphQL/mutations/createURLForCurrentUser';
import Me from 'GraphQL/queries/me';
import SetAddImage from 'GraphQL/mutations/SetAddImage';
import GetAddImage from 'GraphQL/queries/GetAddImage';
import getURL from 'GraphQL/queries/url';

import client from '../../../client';
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

function handleMutationProperties() {
  return {
    onSubmit: async function addURL(url) {
      const { data } = await client.query({
        query: getURL,
        variables: {
          value: url,
        },
      });

      let urlId;

      if (!data.url) {
        const result = await client.mutate({
          mutation: createURL,
          variables: {
            url,
          },
        });
        urlId = result.data.createURL.id;
      }

      if (!urlId) {
        urlId = url.id;
      }

      await client.mutate({
        mutation: createURLForCurrentUser,
        variables: { urlId },
        refetchQueries: [{
          query: Me,
        }],
        update: (cache) => {
          // Reset stored state when mutation succeeds
          cache.writeData({
            data: {
              AddImage: DEFAULT_ADD_IMAGE,
            },
          });
        },
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
    getURL,
    {
      options: props => ({ variables: { value: props.url } }),
      props: handleMutationProperties,
    },
  ),
)(AddImageDialog);
