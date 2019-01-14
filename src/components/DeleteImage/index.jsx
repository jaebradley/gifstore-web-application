import React from 'react';
import {
  Mutation,
} from 'react-apollo';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

import DELETE_URL_MUTATION from './mutation';
import GET_IMAGES from '../Images/query';

const DeleteImage = ({ url }) => (
  <Mutation
    mutation={DELETE_URL_MUTATION}
    refetchQueries={[{ query: GET_IMAGES }]}
  >
    { DeleteURLMutation => (
      <div style={{ position: 'absolute', left: '206px' }}>
        <IconButton size="small" onClick={() => DeleteURLMutation({ variables: { url } })}>
          <Delete style={{ color: 'white' }} fontSize="small" />
        </IconButton>
      </div>
    )}
  </Mutation>
);

DeleteImage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DeleteImage;
