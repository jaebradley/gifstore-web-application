import React from 'react';

import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';

function Login({ onSuccess, onFailure }) {
  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
}

Login.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default Login;
