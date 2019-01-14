import React from 'react';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';

import ADD_URL_MUTATION from './mutation';
import GET_IMAGES from '../Images/query';

const AddURL = () => {
  let input;

  return (
    <Mutation
      mutation={ADD_URL_MUTATION}
      refetchQueries={[{ query: GET_IMAGES }]}
    >
      { AddURLMutation => (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              AddURLMutation({ variables: { url: input.value } });
              input.value = '';
            }}
          >
            <Input
              inputRef={(node) => { input = node; }}
              type="text"
              placeholder="URL"
            />
            <Button
              label="Add URL"
              type="submit"
            >
              Add URL
            </Button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default AddURL;
